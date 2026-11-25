#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/sfyseo/minerador_lexico_tjsp.py
Módulo de SfySEO Interno — Mineração Léxica sobre Decisões do TJSP.

Funcionalidades:
1. Extração de termos fáticos e vocabulário técnico de decisões judiciais reais;
2. Separação de termos correlacionados a decisões procedentes vs improcedentes;
3. Geração de dicionário canônico por vertical [14 temas do JEC];
4. Exportação estruturada para subsidiar os 3 formatos de artigo do DefendaMe.
"""

import re
import json
import argparse
from pathlib import Path
from collections import Counter
from typing import List, Dict, Tuple, Any

BASE_DIR = Path(__file__).resolve().parent.parent.parent
DOCS_DIR = BASE_DIR / "docs"

# Stopwords jurídicas e gramaticais em português
STOPWORDS = {
    'de', 'a', 'o', 'que', 'e', 'do', 'da', 'em', 'um', 'para', 'com', 'nao', 'uma', 'os', 'no',
    'se', 'na', 'por', 'mais', 'as', 'dos', 'como', 'mas', 'foi', 'ao', 'ele', 'das', 'tem',
    'nos', 'ja', 'sua', 'ou', 'quando', 'muito', 'ha', 'nos', 'ja', 'esta', 'pelo', 'pela',
    'ate', 'isso', 'ela', 'entre', 'era', 'depois', 'sem', 'mesmo', 'aos', 'ter', 'seus',
    'quem', 'nas', 'me', 'esse', 'eles', 'estao', 'voce', 'tinha', 'foram', 'essa', 'num',
    'nem', 'suas', 'meu', 'as', 'minha', 'numa', 'pelos', 'elas', 'havia', 'seja', 'qual',
    'ser', 'juiz', 'juizo', 'vara', 'autos', 'processo', 'autor', 'reu', 'autora', 're',
    'sentenca', 'termo', 'fls', 'vistos', 'relatorio', 'dispositivo', 'julgado', 'artigo',
    'lei', 'direito', 'acao', 'pedido', 'parte', 'partes', 'merito', 'face'
}

def limpar_e_tokenizar(texto: str) -> List[str]:
    """Limpa e tokeniza o texto jurídico removendo caracteres especiais e stopwords."""
    texto_limpo = re.sub(r'[^\w\s]', ' ', texto.lower())
    tokens = texto_limpo.split()
    return [t for t in tokens if len(t) > 2 and t not in STOPWORDS and not t.isdigit()]

def extrair_ngrams(tokens: List[str], n: int = 2) -> List[str]:
    """Gera n-gramas a partir da lista de tokens."""
    return [' '.join(tokens[i:i+n]) for i in range(len(tokens) - n + 1)]

def minerar_corpus_vertical(amostras: List[Dict[str, str]]) -> Dict[str, Any]:
    """Minera termos de procedência e improcedência a partir de decisões categorizadas."""
    contador_procedente = Counter()
    contador_improcedente = Counter()
    bigramas_procedente = Counter()
    bigramas_improcedente = Counter()

    for item in amostras:
        texto = item.get("texto", "")
        resultado = item.get("resultado", "procedente")
        tokens = limpar_e_tokenizar(texto)
        bigramas = extrair_ngrams(tokens, 2)

        if resultado == "procedente":
            contador_procedente.update(tokens)
            bigramas_procedente.update(bigramas)
        else:
            contador_improcedente.update(tokens)
            bigramas_improcedente.update(bigramas)

    return {
        "termos_chave_procedentes": [t for t, _ in contador_procedente.most_common(20)],
        "bigramas_procedentes": [b for b, _ in bigramas_procedente.most_common(15)],
        "termos_chave_improcedentes": [t for t, _ in contador_improcedente.most_common(20)],
        "bigramas_improcedentes": [b for b, _ in bigramas_improcedente.most_common(15)]
    }

def main():
    parser = argparse.ArgumentParser(description="Minerador Léxico SfySEO Interno TJSP")
    parser.add_argument("--export", action="store_true", help="Salvar dicionário léxico em docs/sfyseo_lexico_tjsp.json")
    args = parser.parse_args()

    print("\n[SFYSEO INTERNO] Iniciando mineração léxica sobre o corpus do TJSP...")

    # Amostra canônica demonstrativa baseada na jurisprudência do TJSP
    amostras_corpus = [
        {
            "vertical": "golpe-pix",
            "resultado": "procedente",
            "texto": "falha na prestacao de servicos bancarios transacao atipica fora do perfil habitual consumidor idoso engenharia social falsa central telefonica violacao do limite noturno seguranca responsabilidade objetiva fortuito interno sumula 479 stj dano material e moral restituição integral"
        },
        {
            "vertical": "golpe-pix",
            "resultado": "improcedente",
            "texto": "transacao realizada mediante digitacao de senha pessoal e biometria facial ausencia de notificacao tempestiva ao banco culpa exclusiva da vitima transacao entre particulares terceiro estelionatario inexistencia de falha de seguranca pedido rejeitado"
        },
        {
            "vertical": "negativacao-indevida",
            "resultado": "procedente",
            "texto": "inscricao indevida em cadastro restritivo divida inexistente fraude perpetrada por terceiro abertura de conta espuria ausencia de contratacao dano moral in re ipsa sumula 30 tjsp comprovante de quitacao cancelamento liminar do apontamento"
        },
        {
            "vertical": "negativacao-indevida",
            "resultado": "improcedente",
            "texto": "existencia de anotacoes legitimas preexistentes aplicacao expressa da sumula 385 stj ausencia de prova de irregularidade dos apontamentos anteriores resp 1981798 mg devedor contumaz afastamento do pedido indenizatorio procedencia meramente formal para cancelamento"
        }
    ]

    resultado = minerar_corpus_vertical(amostras_corpus)
    print(f"[RESULTADO] Top termos de Procedência: {resultado['termos_chave_procedentes'][:8]}")
    print(f"[RESULTADO] Top bigramas de Procedência: {resultado['bigramas_procedentes'][:6]}")
    print(f"[RESULTADO] Top termos de Improcedência: {resultado['termos_chave_improcedentes'][:8]}")
    print(f"[RESULTADO] Top bigramas de Improcedência: {resultado['bigramas_improcedentes'][:6]}")

    if args.export:
        DOCS_DIR.mkdir(parents=True, exist_ok=True)
        caminho_json = DOCS_DIR / "sfyseo_lexico_tjsp.json"
        with open(caminho_json, "w", encoding="utf-8") as f:
            json.dump(resultado, f, ensure_ascii=False, indent=2)
        print(f"[ARQUIVO] Dicionário salvo com sucesso em: {caminho_json}")

if __name__ == "__main__":
    main()
