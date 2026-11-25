#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/podcast/render_podcast_youtube.py
Automação de Renderização de Vídeo para o Canal do YouTube DefendaMe.

Funcionalidades:
1. Converte episódio de podcast de áudio em vídeo full HD [1920x1080 30fps];
2. Sobrepõe onda sonora animada [waveform auditiva] sobre a capa gráfica oficial;
3. Aceleração por GPU NVIDIA GeForce RTX 2060 SUPER via NVENC (h264_nvenc);
4. Otimizado para publicação direta no YouTube e YouTube Shorts.
"""

import os
import sys
import shutil
import argparse
import subprocess
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
PUBLIC_DIR = BASE_DIR / "public"
VIDEO_DIR = PUBLIC_DIR / "video"
DEFAULT_COVER = PUBLIC_DIR / "og-default.jpg"

def verificar_nvenc() -> bool:
    """Verifica se o encoder por hardware NVIDIA h264_nvenc está habilitado no FFmpeg."""
    try:
        proc = subprocess.run(["ffmpeg", "-encoders"], capture_state=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        return "h264_nvenc" in proc.stdout
    except Exception:
        return False

def renderizar_video_podcast(audio_path: Path, output_path: Path, cover_path: Path = DEFAULT_COVER, duracao_teste: int = 5, dry_run: bool = False):
    """Executa a renderização do vídeo combinando imagem de capa, áudio e onda sonora animada."""
    VIDEO_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\n[PODCAST->YOUTUBE] Renderizando vídeo para: {audio_path.name}")
    print(f"[IMAGEM] Capa base: {cover_path}")
    print(f"[SAÍDA] Destino: {output_path}")

    if dry_run:
        print("[DRY-RUN] Parâmetros validados. Nenhuma codificação de vídeo executada.")
        return output_path

    usar_nvenc = verificar_nvenc()
    vcodec = "h264_nvenc -preset p5 -tune hq" if usar_nvenc else "libx264 -preset veryfast -crf 22"
    encoder_tag = "NVIDIA NVENC (GPU RTX 2060 SUPER)" if usar_nvenc else "CPU libx264"
    print(f"[HARDWARE] Codificador de vídeo: {encoder_tag}")

    # Filtro complexo do FFmpeg:
    # 1. Redimensiona imagem para 1920x1080
    # 2. Gera visualizador de áudio (showwaves) semitransparente na base
    # 3. Sobrepõe os dois elementos
    filter_complex = (
        "[0:v]scale=1920:1080[bg];"
        "[1:a]showwaves=s=1720x160:mode=line:colors=0x00E5B9@0.85:scale=cbrt[wave];"
        "[bg][wave]overlay=(W-w)/2:H-h-120:format=auto[outv]"
    )

    t_arg = f"-t {duracao_teste}" if duracao_teste > 0 else ""

    cmd = (
        f'ffmpeg -y -loop 1 -framerate 30 -i "{cover_path}" '
        f'-i "{audio_path}" {t_arg} '
        f'-filter_complex "{filter_complex}" -map "[outv]" -map 1:a '
        f'-c:v {vcodec} -c:a aac -b:a 192k -pix_fmt yuv420p -shortest "{output_path}" >/dev/null 2>&1'
    )

    ret = os.system(cmd)
    if ret == 0 and output_path.exists():
        print(f"[SUCESSO] Vídeo gerado com sucesso: {output_path} [{output_path.stat().st_size} bytes]")
    else:
        print(f"[AVISO] FFmpeg retornou código {ret}. Verifique os parâmetros de entrada.")

    return output_path

def main():
    parser = argparse.ArgumentParser(description="Renderizador de Podcasts para YouTube DefendaMe")
    parser.add_argument("--audio", help="Caminho do arquivo de áudio MP3")
    parser.add_argument("--duracao", type=int, default=5, help="Duração em segundos para renderização (0 para áudio completo)")
    parser.add_argument("--dry-run", action="store_true", help="Apenas validar configurações")
    args = parser.parse_args()

    audio_exemplo = PUBLIC_DIR / "audio" / "negativacao-indevida-dano-moral-sumula-385.mp3"
    if args.audio:
        audio_exemplo = Path(args.audio)

    if not audio_exemplo.exists():
        # Gerar áudio rápido para teste
        audio_exemplo.parent.mkdir(parents=True, exist_ok=True)
        os.system(f'ffmpeg -y -f lavfi -i "sine=frequency=440:duration=5" -ar 44100 -b:a 128k "{audio_exemplo}" >/dev/null 2>&1')

    saida = VIDEO_DIR / f"{audio_exemplo.stem}_youtube.mp4"
    renderizar_video_podcast(audio_exemplo, saida, duracao_teste=args.duracao, dry_run=args.dry_run)

if __name__ == "__main__":
    main()
