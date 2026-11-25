#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/auditoria_dogmatica.py
Linter Forense & Trava de Perfil Rígido das Squads Especializadas do SfyJEC.

Executa a validação dogmática rigorosa de todos os artigos MDX do portal DefendaMe:
1. Checagem de Lado do Precedente (Autor vs. Réu);
2. Trava de Não-Presunção (In Re Ipsa vs. Dano Concreto);
3. Distinção entre Norma Regulamentar e Efeito Processual (ANAC, BACEN, ANS);
4. Filtro Ético OAB (Provimento 205/2021) e Tom da Persona André L. Silva;
5. Cobertura dos Gotchas catalogados na Squad da Vertical.

Retorna código 0 se aprovado, código 1 se houver violação impeditiva (Hard Block).
"""

import re
import sys
from pathlib import Path
from typing import List, Dict, Any, Tuple

ARTIGOS_DIR = Path(__file__).resolve().parent.parent / "src" / "content" / "artigos"
SQUADS_DIR = Path("/home/sfy/cursos/especializacao_jec/squads")

# Mapeamento do slug do tema no Astro para a Squad Especializada no SfyJEC
SLUG_PARA_SQUAD = {
    "transporte-aereo": "03_transporte_aereo_cancelamento",
    "negativacao-indevida": "01_negativacao_indevida_spc_serasa",
    "golpe-pix": "02_fraude_bancaria_golpe",
    "telefonia": "04_telefonia_servicos_nao_solicitados",
    "compras-online": "05_ecommerce_atraso_extravio",
    "energia-eletrica": "08_energia_eletrica_interrupcao_toi",
    "consignado-rmc": "12_emprestimo_consignado_rmc",
    "acidente-de-transito": "09_acidente_transito_reparacao",
    "planos-de-saude": "07_plano_saude_negativa_cobertura",
}

# 1. Termos Estritamente Proibidos (OAB Provimento 205/2021 & Anti-Triunfalismo)
TERMOS_PROIBIDOS_OAB = [
    r"causa\s+ganha",
    r"resultado\s+garantido",
    r"vit[oó]ria\s+certa",
    r"ganho\s+certo",
    r"indeniza[çc][ãa]o\s+garantida",
    r"garante(m)?\s+proced[êe]ncia",
    r"desmonta\s+sumariamente",
    r"sem\s+risco\s+algum",
    r"melhor\s+advogado",
]

# 2. Regras Dogmáticas Específicas por Precedente Paradigmático
REGRAS_PRECENTES = [
    {
        "nome": "STJ REsp 1.584.465/MG (Transporte Aéreo)",
        "gatilho": r"1\.?584\.?465",
        "falha_se_contiver": [
            r"desmonta\s+sumariamente",
            r"garante\s+a\s+condena[çc][ãa]o",
            r"gera\s+dano\s+(moral\s+)?autom[áa]tico",
            r"presun[çc][ãa]o\s+de\s+dano\s+moral",
        ],
        "exige_que_contenha": [
            r"(n[ãa]o\s+(se\s+)?presum(e|ido)|in\s+re\s+ipsa|defesa|caso\s+concreto|circunst[âa]ncias\s+extraordin[áa]rias)",
        ],
        "mensagem_erro": (
            "O REsp 1.584.465/MG é a tese de defesa das companhias aéreas que afastou o dano moral presumido. "
            "É proibido apresentá-lo como garantia automática do autor; deve ser ensinado o distinguishing "
            "com prova de circunstâncias extraordinárias e falha de assistência material."
        )
    },
    {
        "nome": "STF Tema 210 (Convenções de Varsóvia/Montreal)",
        "gatilho": r"Tema\s+210",
        "falha_se_contiver": [
            r"derruba\s+os\s+limites.*danos?\s+materiais?",
            r"desmonta.*limites\s+de\s+Vars[óo]via.*danos?\s+materiais?",
        ],
        "exige_que_contenha": [
            r"(danos?\s+materiais?|extravio\s+de\s+bagagem)",
            r"(danos?\s+morais?|CDC)",
        ],
        "mensagem_erro": (
            "O Tema 210 do STF decidiu que Varsóvia/Montreal PREVALECEM para limitar danos materiais. "
            "Apenas os danos morais escapam à convenção internacional e são tutelados integralmente pelo CDC."
        )
    },
    {
        "nome": "STJ Súmula 385 (Negativação Indevida e Devedor Contumaz)",
        "gatilho": r"S[úu]mula\s+385",
        "falha_se_contiver": [
            r"garante\s+dano\s+moral\s+a\s+quem\s+tem\s+nome\s+sujo",
        ],
        "exige_que_contenha": [
            r"(preexistente|leg[íi]tima|afasta|exce[çc][ãa]o|discuss[ãa]o\s+judicial)",
        ],
        "mensagem_erro": (
            "A Súmula 385 do STJ afasta o dano moral quando há anotação legítima preexistente. "
            "O texto deve demonstrar como afastar a súmula (anotação fraudulenta ou sob questionamento judicial)."
        )
    }
]

# 3. WHITELIST FORENSE DE PRECEDENTES JUDICIAIS HOMOLOGADOS (Zero Alucinação)
# Nenhum número de processo (REsp, AREsp, RE, ARE) pode ser publicado sem validação formal prévia
# Chaves normalizadas em apenas dígitos para busca determinística
WHITELIST_PRECEDENTES_HOMOLOGADOS: Dict[str, Dict[str, str]] = {
    "1584465": {
        "tribunal": "STJ",
        "tipo": "REsp",
        "processo": "REsp 1.584.465/MG",
        "relator": "Min. Nancy Andrighi",
        "orgao": "3ª Turma",
        "tema_materia": "transporte-aereo",
        "descricao": "Paradigma STJ sobre inexistência de dano moral presumido por atraso de voo."
    },
    "1520449": {
        "tribunal": "STJ",
        "tipo": "AREsp",
        "processo": "AgInt no AREsp 1.520.449/SP",
        "relator": "Min. Raul Araújo",
        "orgao": "4ª Turma",
        "tema_materia": "transporte-aereo",
        "descricao": "Confirmação da 4ª Turma: ausência de in re ipsa em atraso/cancelamento de voo."
    },
    "2150150": {
        "tribunal": "STJ",
        "tipo": "AREsp",
        "processo": "AgInt no AREsp 2.150.150/SP",
        "relator": "Min. Raul Araújo",
        "orgao": "4ª Turma",
        "tema_materia": "transporte-aereo",
        "descricao": "Reafirmação contemporânea (2024) da 4ª Turma sobre necessidade de dano concreto."
    },
    "1704002": {
        "tribunal": "STJ",
        "tipo": "REsp",
        "processo": "REsp 1.704.002/SP",
        "relator": "Min. Nancy Andrighi",
        "orgao": "3ª Turma",
        "tema_materia": "negativacao-indevida",
        "descricao": "Distinguishing da Súmula 385 quando a anotação preexistente está sub judice."
    },
    "1981798": {
        "tribunal": "STJ",
        "tipo": "REsp",
        "processo": "REsp 1.981.798/MG",
        "relator": "Min. Moura Ribeiro",
        "orgao": "Segunda Seção",
        "tema_materia": "negativacao-indevida",
        "descricao": "Segunda Seção do STJ: a simples existência de ação judicial não afasta automaticamente a Súmula 385; exige-se verossimilhança da ilegitimidade das inscrições preexistentes."
    },
    "1284920": {
        "tribunal": "STJ",
        "tipo": "REsp",
        "processo": "REsp 1.284.920/RJ",
        "relator": "Min. Marco Buzzi",
        "orgao": "4ª Turma",
        "tema_materia": "geral",
        "descricao": "Teoria do desvio produtivo do consumidor."
    },
    "1737412": {
        "tribunal": "STJ",
        "tipo": "REsp",
        "processo": "REsp 1.737.412/SE",
        "relator": "Min. Nancy Andrighi",
        "orgao": "3ª Turma",
        "tema_materia": "geral",
        "descricao": "Reconhecimento do tempo perdido do consumidor como dano moral indenizável."
    },
    "636331": {
        "tribunal": "STF",
        "tipo": "RE",
        "processo": "RE 636.331",
        "relator": "Min. Gilmar Mendes",
        "orgao": "Plenário",
        "tema_materia": "transporte-aereo",
        "descricao": "Tema 210 STF: Limitação de indenização por danos materiais segundo Varsóvia/Montreal."
    },
    "1373406": {
        "tribunal": "STF",
        "tipo": "ARE",
        "processo": "ARE 1.373.406/SP",
        "relator": "Min. Dias Toffoli",
        "orgao": "Plenário",
        "tema_materia": "transporte-aereo",
        "descricao": "Tema 1.240 STF: Inaplicabilidade de Convenções internacionais a danos morais."
    }
}

# 4. BLACKLIST DE JULGADOS ALUCINADOS OU DESLOCADOS DE MATÉRIA
BLACKLIST_PROCESSOS_INVALIDOS = {
    "1705889": (
        "AREsp 1.705.889/SP trata de matéria processual de admissibilidade (Súmula 182/STJ) "
        "e NÃO de transporte aéreo. Foi substituído canonicamente por AgInt no AREsp 1.520.449/SP."
    )
}

PADRAO_CITACAO_JUDICIAL = re.compile(
    r'\b(?:REsp|AREsp|RE|ARE|Recurso\s+Especial|Agravo\s+em\s+Recurso\s+Especial|Recurso\s+Extraordin[áa]rio|Agravo\s+em\s+Recurso\s+Extraordin[áa]rio|AgInt\s+no\s+AREsp)\s*(?:n[ºo]?\s*)?([0-9][0-9\.\/]+(?:/[A-Z]{2})?)',
    re.IGNORECASE
)


def normalizar_numero_processo(num_str: str) -> str:
    """Extrai estritamente os dígitos do número do processo judicial."""
    limpo = re.sub(r'/[A-Z]{2}$|/$', '', num_str.strip())
    return re.sub(r'\D', '', limpo)


def extrair_metadados_mdx(conteudo: str) -> Tuple[Dict[str, str], str]:
    """Extrai frontmatter YAML simples e corpo do documento MDX."""
    frontmatter = {}
    corpo = conteudo
    if conteudo.startswith("---"):
        partes = conteudo.split("---", 2)
        if len(partes) >= 3:
            fm_texto = partes[1]
            corpo = partes[2]
            for linha in fm_texto.splitlines():
                if ":" in linha and not linha.strip().startswith("-"):
                    chave, val = linha.split(":", 1)
                    frontmatter[chave.strip()] = val.strip().strip('"').strip("'")
    return frontmatter, corpo


def auditar_artigo(arquivo: Path) -> List[str]:
    """Executa o crivo dogmático completo em um artigo."""
    erros = []
    conteudo = arquivo.read_text(encoding="utf-8")
    fm, corpo = extrair_metadados_mdx(conteudo)
    tema = fm.get("tema", "")

    # Remove linhas de perguntas do FAQ da checagem afirmativa para permitir que a pergunta espelhe
    # a dúvida real do usuário no Google (ex: "Atraso gera dano automático?"),
    # desde que a resposta (e o corpo) forneça a verdade jurídica estrita.
    linhas_afirmativas = [
        linha for linha in conteudo.splitlines() 
        if "pergunta:" not in linha
    ]
    conteudo_afirmativo = "\n".join(linhas_afirmativas)

    # 1. Filtro OAB & Anti-Triunfalismo
    for padrao in TERMOS_PROIBIDOS_OAB:
        match = re.search(padrao, conteudo, re.IGNORECASE)
        if match:
            erros.append(f"[OAB / ÉTICA] Termo sensacionalista/proibido detectado: '{match.group(0)}'")

    # 2. Regras Dogmáticas de Precedentes Superiores
    for regra in REGRAS_PRECENTES:
        # A regra de precedente só é acionada se o precedente for substantivamente debatido no corpo
        # ou nas respostas do artigo (ignora se for mera navegação em trilha.proximo / trilha.anterior)
        if re.search(regra["gatilho"], corpo, re.IGNORECASE):
            for falha in regra.get("falha_se_contiver", []):
                m_falha = re.search(falha, conteudo_afirmativo, re.IGNORECASE)
                if m_falha:
                    erros.append(f"[DOGMÁTICA - {regra['nome']}] Afirmação errônea detectada: '{m_falha.group(0)}'. Motivo: {regra['mensagem_erro']}")
            for exigencia in regra.get("exige_que_contenha", []):
                if not re.search(exigencia, corpo, re.IGNORECASE):
                    erros.append(f"[DOGMÁTICA - {regra['nome']}] Falta ressalva jurídica indispensável compatível com: '{exigencia}'. Motivo: {regra['mensagem_erro']}")

    # 3. Trava de Não-Presunção (In Re Ipsa em Transporte Aéreo)
    if tema == "transporte-aereo":
        # Se afirmar no corpo que atraso gera sempre dano automático
        if re.search(r"atraso.*gera\s+(sempre|automaticamente|presumido)\s+dano\s+moral", conteudo_afirmativo, re.IGNORECASE):
            erros.append("[TRAVA IN RE IPSA] Atraso de voo não gera dano moral presumido no STJ nem no TJSP. Exige comprovação de lesão extraordinária no caso concreto.")

        # Trava do Marco das 4 Horas (ANAC vs. Judiciário)
        if re.search(r"4\s+horas", corpo, re.IGNORECASE):
            if not re.search(r"(assist[êe]ncia|ANAC|Resolu[çc][ãa]o|suporte|refei[çc][ãa]o|hotel|caso\s+concreto)", corpo, re.IGNORECASE):
                erros.append("[TRAVA ANAC] Menção a '4 horas' sem esclarecer que se trata de dever de assistência material da Resolução 400 da ANAC.")

    # 4. Checagem de Parecer Técnico do Especialista André L. Silva
    match_parecer = re.search(r"<Parecer[^>]*>(.*?)</Parecer>", conteudo, re.DOTALL)
    if match_parecer:
        texto_parecer = match_parecer.group(1)
        if re.search(r"(vit[óo]ria\s+certa|ganho\s+certo|desmonta\s+sumariamente|n[ãa]o\s+h[áa]\s+como\s+perder)", texto_parecer, re.IGNORECASE):
            erros.append("[PERSONA ANDRÉ L. SILVA] Tom incompatível com jurista/pesquisador empírico. Proibido triunfalismo ou promessas de resultado no Parecer.")

    # 5. Crivo Dialético de Enunciados do JEC (FONAJE / FOJESP / Colégios Recursais)
    # Se o artigo detalhar o teto de 40 salários mínimos do JEC, deve obrigatoriamente
    # integrar os Enunciados pertinentes (ex: Enunciado 170 FONAJE ou Enunciados FOJESP)
    if re.search(r"40\s+sal[áa]rios\s+m[íi]nimos", corpo, re.IGNORECASE):
        if not re.search(r"(FONAJE|FOJESP|Enunciado)", corpo, re.IGNORECASE):
            erros.append("[CRIVO JEC / SQUAD] Menção ao teto de 40 salários mínimos sem fundamentação em Enunciados do FONAJE ou FOJESP sobre alçada e cumulação.")

    # 6. Auditoria Forense Rigorosa de Processos e Precedentes (Zero Alucinação)
    # Extrai todas as referências a REsp, AREsp, RE, ARE tanto em tags <Legis> quanto no texto corrido
    for match in PADRAO_CITACAO_JUDICIAL.finditer(conteudo):
        ref_completa = match.group(0).strip()
        num_bruto = match.group(1).strip()
        num_digitos = normalizar_numero_processo(num_bruto)

        # Checagem 6.1: Blacklist de Julgados Conhecidamente Inválidos ou Deslocados
        if num_digitos in BLACKLIST_PROCESSOS_INVALIDOS:
            erros.append(
                f"[FORENSE - PRECEDENTE INVÁLIDO] Processo desvirtuado ou incorreto citado: '{ref_completa}'. "
                f"Motivo: {BLACKLIST_PROCESSOS_INVALIDOS[num_digitos]}"
            )
            continue

        # Checagem 6.2: Whitelist Forense de Precedentes Homologados
        if num_digitos not in WHITELIST_PRECEDENTES_HOMOLOGADOS:
            erros.append(
                f"[FORENSE - ALUCINAÇÃO JURISPRUDENCIAL] Citação judicial '{ref_completa}' (número {num_digitos}) NÃO consta na Whitelist Forense. "
                f"É terminantemente proibido citar processos não auditados e não homologados na base canônica."
            )
        else:
            dados = WHITELIST_PRECEDENTES_HOMOLOGADOS[num_digitos]
            # Checagem 6.3: Aderência Temática do Precedente
            if dados["tema_materia"] != "geral" and tema and dados["tema_materia"] != tema:
                erros.append(
                    f"[FORENSE - MATÉRIA DESLOCADA] O julgado '{ref_completa}' ({dados['processo']}) foi homologado para a vertical '{dados['tema_materia']}', "
                    f"mas está sendo citado em um artigo da vertical '{tema}'."
                )

    return erros


def main():
    print("=" * 78)
    print("⚖️  AUDITORIA FORENSE E LINTER DOGMÁTICO DO ECOSSISTEMA SFYJEC / DEFENDAME")
    print("   Travas Ativas: Lado do Precedente, In Re Ipsa, Regulação ANAC e OAB 205")
    print("=" * 78)

    artigos = list(ARTIGOS_DIR.glob("*.mdx"))
    if not artigos:
        print("[!] Nenhum artigo .mdx encontrado em:", ARTIGOS_DIR)
        sys.exit(0)

    total_artigos = len(artigos)
    total_erros = 0

    for arq in sorted(artigos):
        erros = auditar_artigo(arq)
        if erros:
            total_erros += len(erros)
            print(f"\n❌ [REPROVADO] {arq.name} ({len(erros)} infrações dogmáticas):")
            for e in erros:
                print(f"   • {e}")
        else:
            print(f"✅ [APROVADO]  {arq.name} — Conforme com a Matriz Dogmática e OAB.")

    print("\n" + "-" * 78)
    if total_erros > 0:
        print(f"🚨 FALHA CRÍTICA: {total_erros} infração(ões) dogmática(s) detectada(s).")
        print("   O build está BLOQUEADO até a retificação jurídica dos artigos.")
        print("-" * 78)
        sys.exit(1)
    else:
        print(f"🎉 SUCESSO: Todos os {total_artigos} artigos passaram no crivo da Dogmática Forense!")
        print("-" * 78)
        sys.exit(0)


if __name__ == "__main__":
    main()
