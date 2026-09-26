```javascript
const TOPICS = {

    diamante: {
        keys: ["diamante", "diamantes"],
        answer: `💎 DIAMANTES

• Na geração moderna, diamantes são encontrados principalmente em camadas profundas.
• Y=-59 é uma camada bastante usada para mineração.
• Uma picareta de ferro ou melhor é necessária para minerar o minério de diamante.
• Túneis em formato de galeria podem ajudar a explorar uma grande área.
• Tenha tochas, comida e água para se proteger durante a mineração.`
    },

    nether: {
        keys: ["nether", "portal do nether", "portal nether"],
        answer: `🔥 NETHER

Para fazer um portal do Nether:

1. Construa uma moldura de obsidiana.
2. O portal mínimo tem 4 blocos de largura e 5 de altura contando a moldura.
3. Acenda o interior com pederneira e aço.
4. Entre no portal para chegar ao Nether.

⚠️ Leve comida e equipamentos, porque o Nether é perigoso.`
    },

    crafting: {
        keys: ["craft", "crafting", "receita", "receitas"],
        answer: `🛠️ CRAFTING

Posso explicar receitas de vários itens do Minecraft.

Exemplos:

• picareta
• espada
• machado
• fornalha
• baú
• mesa de encantamentos
• ferramentas de diamante

Pergunte:

"como faço uma picareta de diamante?"`
    },

    creeper: {
        keys: ["creeper", "creepers"],
        answer: `💥 CREEPER

O Creeper é um mob hostil que se aproxima do jogador e explode.

Ele pode deixar pólvora.

Dica: mantenha distância e use escudo quando for apropriado.`
    },

    xp: {
        keys: ["xp", "experiência", "experiencia"],
        answer: `⭐ XP

Você pode conseguir experiência de várias formas:

• derrotando mobs;
• minerando determinados minérios;
• fundindo itens em fornalhas;
• negociando com aldeões;
• usando algumas farms.

A experiência pode ser usada para encantar itens.`
    },

    netherite: {
        keys: ["netherite", "netherita"],
        answer: `🟪 NETHERITA

A netherita é um material muito valioso.

O processo geral é:

1. Encontrar detritos ancestrais no Nether.
2. Fundir os detritos.
3. Obter sucata de netherita.
4. Combinar os materiais necessários para obter lingotes.
5. Melhorar equipamentos de diamante.`
    },

    vila: {
        keys: [
            "vila",
            "vilas",
            "aldeia",
            "aldeias",
            "aldeão",
            "aldeoes",
            "aldeões"
        ],

        answer: `🏘️ VILAS

Vilarejos podem aparecer em vários biomas, incluindo:

• planícies;
• desertos;
• savanas;
• taigas;
• regiões nevadas.

Você pode proteger os aldeões e fazer trocas com eles.`
    },

    redstone: {
        keys: ["redstone", "red stone"],

        answer: `🔴 REDSTONE

Redstone é usada para criar mecanismos.

Com ela você pode fazer:

• portas automáticas;
• pistões;
• farms automáticas;
• sistemas de iluminação;
• mecanismos com observadores;
• máquinas e circuitos.`
    },

    end: {
        keys: [
            "ender dragon",
            "enderdragão",
            "enderdragao",
            "dragão",
            "dragao",
            "end"
        ],

        answer: `🐉 ENDER DRAGON

O Ender Dragon é o chefe principal do End.

Para chegar ao End, normalmente você precisa:

1. Encontrar uma fortaleza.
2. Conseguir os itens necessários.
3. Localizar o portal.
4. Ativar o portal.
5. Entrar no End e enfrentar o dragão.`
    },

    comandos: {
        keys: [
            "comando",
            "comandos",
            "gamemode",
            "teleporte",
            "teleport"
        ],

        answer: `⌨️ COMANDOS

Alguns comandos conhecidos:

/gamemode creative

/gamemode survival

/time set day

/weather clear

/teleport jogador x y z

A disponibilidade depende da edição, versão e permissões.`
    },

    armadura: {
        keys: ["armadura", "armaduras", "armor"],

        answer: `🛡️ ARMADURA

Existem vários materiais para armaduras:

• couro;
• ferro;
• ouro;
• diamante;
• netherita.

Você também pode usar encantamentos para melhorar a proteção.`
    },

    encantamento: {
        keys: [
            "encantamento",
            "encantar",
            "encantamentos"
        ],

        answer: `✨ ENCANTAMENTOS

Encantamentos podem melhorar ferramentas, armas e armaduras.

Exemplos:

• Eficiência;
• Fortuna;
• Toque Suave;
• Proteção.

A compatibilidade depende do item.`
    },

    biomas: {
        keys: ["bioma", "biomas"],

        answer: `🌎 BIOMAS

O Minecraft possui muitos biomas, como:

• planícies;
• florestas;
• desertos;
• selvas;
• oceanos;
• montanhas;
• pântanos;
• taigas;
• regiões nevadas.`
    },

    mesa: {
        keys: [
            "mesa de trabalho",
            "crafting table",
            "bancada"
        ],

        answer: `🧱 MESA DE TRABALHO

A mesa de trabalho é feita colocando 4 tábuas de madeira na grade de crafting 2×2.

Ela permite usar uma grade de crafting maior.`
    },

    fornalha: {
        keys: ["fornalha", "forno"],

        answer: `🔥 FORNALHA

A fornalha é feita com 8 pedregulhos em volta da grade de crafting, deixando o centro vazio.

Ela pode fundir minérios e cozinhar alimentos.`
    },

    farm: {
        keys: [
            "farm",
            "farms",
            "fazenda",
            "automatica",
            "automática"
        ],

        answer: `⚙️ FARMS

Uma farm ajuda a produzir recursos.

Exemplos:

• farm de ferro;
• farm de comida;
• farm de XP;
• farm de mobs;
• farm de cana-de-açúcar;
• farm de madeira.

O funcionamento pode ser diferente entre Java e Bedrock.`
    }
};


// ============================================================
// CORREÇÃO DE ERROS
// ============================================================

const COMMON_MISTAKES = {

    "como fas": "como faz",
    "como faser": "como fazer",
    "como faze": "como fazer",

    "onde axo": "onde acho",
    "onde acha": "onde achar",

    "onde encotrar": "onde encontrar",
    "onde emcontrar": "onde encontrar",

    "diamate": "diamante",
    "diamamte": "diamante",

    "neter": "nether",

    "creper": "creeper",

    "redstoni": "redstone",

    "netherita": "netherite",

    "encantameto": "encantamento",
    "encatamento": "encantamento",

    "aldeao": "aldeão",
    "aldeoes": "aldeões",

    "dragao": "dragão",

    "vc": "você",
    "vcs": "vocês",

    "tb": "também",
    "tbm": "também",

    "pq": "por que",

    "obg": "obrigado"
};


function normalize(text) {

    return text
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


function correctText(text) {

    let result = text;

    const entries = Object.entries(COMMON_MISTAKES)
        .sort((a, b) => b[0].length - a[0].length);

    for (const [wrong, right] of entries) {

        const escaped = wrong.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

        const regex = new RegExp(
            "\\b" + escaped + "\\b",
            "gi"
        );

        result = result.replace(regex, right);
    }

    return result;
}


// ============================================================
// ENCONTRAR TÓPICO
// ============================================================

function findTopic(question) {

    const q = normalize(question);

    for (const [name, data] of Object.entries(TOPICS)) {

        for (const key of data.keys) {

            if (q.includes(normalize(key))) {
                return name;
            }
        }
    }

    return null;
}


// ============================================================
// RESPOSTA
// ============================================================

function answer(question) {

    if (!question.trim()) {
        return "Digite uma pergunta. 🙂";
    }

    const corrected = correctText(question);

    const q = normalize(corrected);


    // SAUDAÇÃO

    const greetings = [
        "oi",
        "ola",
        "hello",
        "e ai",
        "eai",
        "opa",
        "fala"
    ];

    if (
        greetings.includes(q) ||
        q.startsWith("oi ")
    ) {

        return `👋 Olá! Eu sou a IA do Minecraft!

Pode perguntar qualquer coisa sobre Minecraft que eu conheça.

Exemplos:

• Como achar diamante?
• Como fazer um portal do Nether?
• Como conseguir XP?
• Como fazer uma farm?
• Quais comandos existem?`;
    }


    // NOME

    if (
        q.includes("seu nome") ||
        q.includes("quem e voce")
    ) {

        return `🤖 Meu nome é Minecraft IA.

Fui criada para ajudar com Minecraft Java e Bedrock.`;
    }


    // VERSÃO

    if (
        q.includes("versao") &&
        (
            q.includes("java") ||
            q.includes("bedrock")
        )
    ) {

        return `🖥️ Posso explicar diferenças entre Minecraft Java e Bedrock.

Diga qual recurso você quer comparar.`;
    }


    // TÓPICO

    const topic = findTopic(corrected);

    if (topic) {

        return TOPICS[topic].answer;
    }


    // COMO FAZER

    if (
        q.includes("como fazer") ||
        q.includes("como criar") ||
        q.includes("como faz")
    ) {

        return `🛠️ Posso ajudar com crafting!

Diga exatamente qual item você quer criar.

Por exemplo:

"como fazer uma espada de diamante?"

"como fazer uma picareta?"

"como fazer uma fornalha?"`;
    }


    // ONDE ACHAR

    if (
        q.includes("onde achar") ||
        q.includes("onde encontrar") ||
        q.includes("onde acho")
    ) {

        return `🗺️ Posso ajudar a encontrar recursos e estruturas.

Diga o que você está procurando.

Exemplos:

"onde achar diamante?"

"onde encontrar uma vila?"

"onde encontrar detritos ancestrais?"`;
    }


    // MELHOR

    if (q.includes("melhor")) {

        return `📚 "Melhor" depende do objetivo.

Se você me disser o que quer fazer — mineração, combate, construção, exploração ou farm — posso explicar as diferenças entre as opções.`;
    }


    // RESPOSTA PADRÃO

    return `🤔 Ainda não tenho essa informação.

Tente escrever algo como:

• "como achar diamante?"
• "onde axo diamante?"
• "como fas uma farm de ferro?"
• "qual comando muda para criativo?"
• "como faser um portal do nether?"

💡 Eu consigo entender vários erros comuns de digitação.`;
}


// ============================================================
// INTERFACE DO CHAT
// ============================================================

const chat = document.getElementById("chat");
const form = document.getElementById("form");
const input = document.getElementById("input");


function addMessage(author, text, type) {

    const message = document.createElement("div");

    message.className =
        "message " + type;


    const authorElement =
        document.createElement("div");

    authorElement.className =
        "author";

    authorElement.textContent =
        author;


    const textElement =
        document.createElement("div");

    textElement.className =
        "text";

    textElement.textContent =
        text;


    message.appendChild(
        authorElement
    );

    message.appendChild(
        textElement
    );

    chat.appendChild(
        message
    );


    chat.scrollTop =
        chat.scrollHeight;
}


// ============================================================
// MENSAGEM INICIAL
// ============================================================

addMessage(
    "Minecraft IA",

    `👋 Bem-vindo!

Eu sou sua assistente de Minecraft.

Agora também consigo entender vários erros de digitação.

Por exemplo:

"onde axo diamante?"

"como fas uma picareta?"

Pergunte sobre crafting, mobs, biomas, Nether, End, farms, redstone, comandos e muito mais.

Digite sua pergunta abaixo!`,

    "ai"
);


// ============================================================
// ENVIAR
// ============================================================

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const question =
            input.value.trim();

        if (!question) {
            return;
        }


        addMessage(
            "Você",
            question,
            "user"
        );


        addMessage(
            "Minecraft IA",
            answer(question),
            "ai"
        );


        input.value = "";

        input.focus();
    }
);
```
