#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/sfyseo/curador_serp_sheets.py
Módulo de SfySEO Externo — Integração de Palavras-Chave de Busca e Google Sheets.

Funcionalidades:
1. Estruturação da planilha mestre de palavras-chave da Dupla Hélice (Interno TJSP x Externo SERP);
2. Curadoria de termos de cauda longa capturados em motores de busca e modelos de IA;
3. Mapeamento direto entre o termo de busca do cidadão e a fundamentação jurídica do TJSP;
4. Exportação em formato CSV pronto para importação direta no Google Sheets ou consumo via API.
"""

import csv
import argparse
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
DOCS_DIR = BASE_DIR / "docs"

COLUNAS_SHEETS = [
    "Vertical_Slug",
    "Termo_Busca_Externo",
    "Origem_Motor",
    "Intencao_Busca",
    "Volume_Mensal_Est",
    "Tese_Juridica_TJSP",
    "Precedente_Paradigma",
    "Formato_Artigo_Recomendado",
    "Titulo_Sugerido",
    "Status_Producao"
]

LINHAS_EXEMPLO = [
    [
        "golpe-pix",
        "o que fazer após cair no golpe do pix",
        "Google SERP / AnswerThePublic",
        "Informacional / Urgência",
        "18.100",
        "Falha no mecanismo preventivo antifraude e notificação tempestiva",
        "Resolução BCB nº 103 e Súmula 479 do STJ",
        "Guia Técnico",
        "Golpe do Pix: Primeiras 24 Horas e Como Solicitar o Bloqueio Cautelar",
        "Publicado"
    ],
    [
        "golpe-pix",
        "banco devolve dinheiro golpe do pix",
        "Google SERP / IA Generativa",
        "Comercial / Jurídica",
        "9.900",
        "Responsabilidade civil objetiva por fortuito interno",
        "Súmula 479 do STJ",
        "Análise Autoral",
        "Golpe do Pix: Quando o Banco é Condenado a Devolver os Valores",
        "Publicado"
    ],
    [
        "negativacao-indevida",
        "como limpar o nome no serasa em 5 dias",
        "Google SERP / Ubersuggest",
        "Informacional / Direitos",
        "22.200",
        "Prazo legal de 5 dias úteis para exclusão após pagamento",
        "Súmula 548 do STJ",
        "Guia Técnico",
        "Nome Negativado no Serasa: Prazos Legais e Procedimentos de Exclusão",
        "Publicado"
    ],
    [
        "negativacao-indevida",
        "tenho nome sujo cabe dano moral sumula 385",
        "Google SERP / Fóruns Jurídicos",
        "Transacional / Investigativa",
        "4.400",
        "Distinguishing da Súmula 385 por fraude conexa ou ação em curso",
        "REsp 1.704.002/SP e REsp 1.981.798/MG",
        "Análise Autoral",
        "Dano Moral por Negativação Indevida: A Armadilha da Súmula 385 do STJ",
        "Publicado"
    ],
    [
        "consignado-rmc",
        "desconto inss bmg rmc como cancelar",
        "Google SERP / Reclame Aqui",
        "Urgência / Transacional",
        "14.500",
        "Vício de consentimento em cartão RMC/RCC e devolução de valores",
        "Art. 42, parágrafo único do CDC e Lei 10.820/2003",
        "Guia Técnico",
        "Empréstimo Consignado Não Autorizado: Como Contestar Descontos no INSS",
        "Planejado"
    ]
]

def exportar_planilha_modelo(destino: Path):
    """Exporta arquivo CSV no formato do Google Sheets."""
    destino.parent.mkdir(parents=True, exist_ok=True)
    with open(destino, mode="w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f, delimiter=";")
        writer.writerow(COLUNAS_SHEETS)
        writer.writerows(LINHAS_EXEMPLO)
    print(f"[SFYSEO EXTERNO] Planilha exportada com sucesso: {destino} [{len(LINHAS_EXEMPLO)} linhas]")

def main():
    parser = argparse.ArgumentParser(description="Curador SfySEO Externo e Google Sheets")
    parser.add_argument("--saida", default=str(DOCS_DIR / "sfyseo_palavras_chave_sheets.csv"), help="Caminho do arquivo CSV de saída")
    args = parser.parse_args()

    exportar_planilha_modelo(Path(args.saida))

if __name__ == "__main__":
    main()
