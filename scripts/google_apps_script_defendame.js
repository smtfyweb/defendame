/**
 * DEFENDAME — Integração Google Apps Script com Google Sheets e WhatsApp (CallMeBot)
 * 
 * Este script é vinculado à sua Planilha Google que recebe as capturas de leads
 * do formulário Modal (CaseWizard) e do Chat Inteligente (ChatWidget).
 * 
 * Além de gravar os dados na planilha, ele dispara um alerta instantâneo
 * no seu WhatsApp pessoal a cada novo lead recebido.
 * 
 * COMO ATIVAR:
 * 1. Abra sua Planilha Google vinculada ao DefendaMe.
 * 2. Clique no menu superior: "Extensões" > "Apps Script".
 * 3. Cole o código deste arquivo no editor.
 * 4. Preencha a constante CALLMEBOT_APIKEY com a sua chave (veja instruções abaixo).
 * 5. Clique em "Implantar" > "Nova implantação" > Tipo: "App da Web":
 *    - Executar como: "Eu" (seu e-mail)
 *    - Quem tem acesso: "Qualquer pessoa" (Anonymous)
 * 6. Copie a URL gerada e confirme se é a mesma configurada no seu .env.
 */

// ==============================================================================
// CONFIGURAÇÕES GERAIS
// ==============================================================================
var SEU_WHATSAPP = "5511966016189"; // Seu número com DDI (55) + DDD (11) + 9 dígitos
var CALLMEBOT_APIKEY = "SUA_API_KEY_AQUI"; // Preencha com a API Key recebida no WhatsApp
var EMAIL_NOTIFICACAO = ""; // Opcional: preencha seu e-mail se quiser alerta duplo (WhatsApp + E-mail)

// ==============================================================================
// RECEBIMENTO DO POST DO SITE (CASEWIZARD & CHATWIDGET)
// ==============================================================================
function doPost(e) {
  try {
    var contents = e.postData && e.postData.contents ? e.postData.contents : "{}";
    var data = JSON.parse(contents);

    // 1. Grava os dados na aba ativa da Planilha Google
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // Se for planilha nova sem cabeçalho, cria o cabeçalho automaticamente
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data / Hora",
        "Protocolo",
        "Origem",
        "Categoria / Tema",
        "Nome do Cliente",
        "WhatsApp Cliente",
        "E-mail",
        "Página de Origem",
        "Dados Completos (JSON)"
      ]);
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold").setBackground("#e6f4ea");
    }

    var timestamp = Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss");
    var protocolo = data.protocolo || ("DM-" + Utilities.formatDate(new Date(), "America/Sao_Paulo", "yyMMdd") + "-AUTO");
    var origem = data.origem || "Formulário Site";
    var categoria = data.categoria || "Geral / JEC";
    var nome = data.nome || "Não informado";
    var whatsapp = data.whatsapp || "Não informado";
    var email = data.email || "Não informado";
    var pagina = data.pagina || "/";

    sheet.appendRow([
      timestamp,
      protocolo,
      origem,
      categoria,
      nome,
      whatsapp,
      email,
      pagina,
      JSON.stringify(data)
    ]);

    // 2. Dispara o alerta instantâneo para o seu WhatsApp via CallMeBot
    enviarAlertaWhatsApp(data, protocolo, timestamp);

    // 3. Opcional: Dispara e-mail de notificação se configurado
    if (EMAIL_NOTIFICACAO && EMAIL_NOTIFICACAO.indexOf("@") !== -1) {
      try {
        var assunto = "🚨 Novo Lead DefendaMe: " + protocolo + " — " + nome;
        var corpoEmail = "Novo lead registrado no portal DefendaMe:\n\n" +
                         "Protocolo: " + protocolo + "\n" +
                         "Data/Hora: " + timestamp + "\n" +
                         "Origem: " + origem + "\n" +
                         "Categoria: " + categoria + "\n" +
                         "Nome: " + nome + "\n" +
                         "WhatsApp: " + whatsapp + "\n" +
                         "E-mail: " + email + "\n" +
                         "Página: " + pagina + "\n\n" +
                         "Dados brutos: " + JSON.stringify(data, null, 2);
        MailApp.sendEmail(EMAIL_NOTIFICACAO, assunto, corpoEmail);
      } catch (errEmail) {
        Logger.log("Erro no envio de e-mail: " + errEmail.toString());
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", protocolo: protocolo }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log("Erro no doPost: " + err.toString());
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ==============================================================================
// FUNÇÃO QUE ENVIA O ALERTA VIA CALLMEBOT
// ==============================================================================
function enviarAlertaWhatsApp(data, protocolo, timestamp) {
  if (!CALLMEBOT_APIKEY || CALLMEBOT_APIKEY === "SUA_API_KEY_AQUI") {
    Logger.log("CallMeBot não enviado: CALLMEBOT_APIKEY não configurada.");
    return;
  }

  var nome = data.nome || "Não informado";
  var whatsapp = data.whatsapp || "Não informado";
  var email = data.email || "Não informado";
  var categoria = data.categoria || "Geral";
  var origem = data.origem || "Site DefendaMe";

  // Montagem do texto elegante formatado com emojis e negrito
  var msg = "🚨 *NOVO LEAD NO DEFENDAME!*\n\n" +
            "📌 *Protocolo:* `" + protocolo + "`\n" +
            "⏰ *Horário:* " + timestamp + "\n" +
            "⚖️ *Tema:* *" + categoria + "*\n" +
            "📍 *Origem:* " + origem + "\n\n" +
            "👤 *Nome:* " + nome + "\n" +
            "📱 *WhatsApp:* " + whatsapp + "\n" +
            "✉️ *E-mail:* " + email + "\n";

  // Coleta detalhes extras dos campos do formulário (ex.: valor, banco, relato)
  var ignorar = ["protocolo", "origem", "categoria", "nome", "whatsapp", "email", "pagina", "tag", "lgpd"];
  var extras = [];
  for (var key in data) {
    if (ignorar.indexOf(key) === -1 && data[key] && typeof data[key] === "string") {
      extras.push("• *" + key + ":* " + data[key]);
    }
  }

  if (extras.length > 0) {
    msg += "\n📝 *Detalhes adicionais:*\n" + extras.join("\n") + "\n";
  }

  // Link direto para você abrir o WhatsApp do cliente com 1 toque:
  var telLimpo = (whatsapp || "").replace(/\D/g, "");
  if (telLimpo.length >= 10) {
    if (telLimpo.length <= 11) telLimpo = "55" + telLimpo;
    msg += "\n👉 *Falar com o cliente agora:*\nhttps://wa.me/" + telLimpo + "\n";
  }

  // Chamada GET HTTP da API CallMeBot
  var url = "https://api.callmebot.com/whatsapp.php?phone=" + SEU_WHATSAPP +
            "&text=" + encodeURIComponent(msg) +
            "&apikey=" + CALLMEBOT_APIKEY;

  try {
    var response = UrlFetchApp.fetch(url, {
      method: "get",
      muteHttpExceptions: true
    });
    Logger.log("Resposta CallMeBot: " + response.getContentText());
  } catch (err) {
    Logger.log("Falha ao disparar CallMeBot: " + err.toString());
  }
}

// ==============================================================================
// FUNÇÃO DE TESTE RÁPIDO (EXECUTE NO EDITOR PARA TESTAR NO SEU CELULAR)
// ==============================================================================
function testarEnvioWhatsApp() {
  var dadosFicticios = {
    nome: "Cliente de Teste",
    whatsapp: "11988887777",
    email: "cliente.teste@exemplo.com",
    categoria: "Fraude bancária e golpe do Pix",
    origem: "Teste Manual Apps Script",
    banco: "Banco Nubank / Itaú",
    valor: "R$ 4.500,00",
    relato: "Caiu em falsa central telefônica solicitando transferência preventiva."
  };
  
  var proto = "DM-" + Utilities.formatDate(new Date(), "America/Sao_Paulo", "yyMMdd") + "-TESTE";
  var hora = Utilities.formatDate(new Date(), "America/Sao_Paulo", "dd/MM/yyyy HH:mm:ss");

  Logger.log("Iniciando teste de envio para: " + SEU_WHATSAPP);
  enviarAlertaWhatsApp(dadosFicticios, proto, hora);
  Logger.log("Envio finalizado. Verifique seu aplicativo do WhatsApp!");
}
