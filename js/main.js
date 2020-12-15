perguntas = [
    {
        "Pergunta": "Se eu possuo 150 R$ e a cada Ano me é adicionado +75R$. Quanto terei depois de 7 anos ? ",
        "Resposta": 1,
        "Alternativas": [
            "675",
            "575",
            "775",
            "875",
            "575",
            "600"
        ]
    },
    {
        "Pergunta": "Manuela mora em um prédio de 5 andares, cada andar possui 6 apartamentos.qual a quantidade de apartamentos no prédio de manuela?",
        "Resposta": 2,
        "Alternativas": [
            "15",
            "30",
            "20",
            "25",
            "10",
            "35"
        ]
    },
    {
        "Pergunta": " Se calcularmos o valor de 2^95, iremos obter um número natural N. O algarismo final (das unidades) desse número N vale:",
        "Resposta": 3,
        "Alternativas": [            
            "4",
            "6",
            "8",
            "2",
            "3",
            "5"
        ]
    },
    {
        "Pergunta": "Com o auxilio de uma corda, que julgava ter 2m de comprimento, medi o comprimento de um fio eletrico e encontrei 40m. Descobri mais tarde que a 5 corda media, na realidade, 2.05m. Qual é o comprimento verdadeiro do fio?",
        "Resposta": 4,
        "Alternativas": [            
            "40",
            "39",
            "38",
            "41",
            "45",
            "42"
        ]
    },
    {
        "Pergunta": "Se um veiculo se deslocar com uma velocidade media de 95km/h, quantos km ele irá percorrer em 2h e 20min?",
        "Resposta": 5,
        "Alternativas": [            
            "220,7",
            "222,7",
            "220",
            "223",
            "221,7",
            "232"
        ]
    },
    {
        "Pergunta": "Em uma lanchonete tem a seguinte promoção. 01 hambúrguer e um refrigerante 250ml por R$ 5,50. Resolvemos comprar para o lanche da empresa 150 unidades dessa promoção. Pagamos ao todo o valor de:",
        "Resposta": 6,
        "Alternativas": [            
            "850,00",
            "800,00",
            "780,00",
            "900,00",
            "950,00",
            "825,00"
        ]
    },
    {
        "Pergunta": "Sabendo que o perímetro de um triângulo equilátero é 18 cm, a sua área vale: Use √3 = 1,73",
        "Resposta": 6,
        "Alternativas": [
            "15,65 cm²",
            "15,76 cm²",
            "15,84 cm²",
            "15,74 cm²",
            "15,94 cm²",
            "15,57 cm²"
        ]
    },
    {
        "Pergunta": "Uma geladeira custa R$ 980,00 à vista ou 12 parcelas fixas de R$ 98,00. Se uma pessoa optar pelo parcelamento em 12 vezes, ela pagará quanto a mais em relação ao preço à vista?",
        "Resposta": 5,
        "Alternativas": [            
            "R$ 99,00",
            "R$ 97,00",
            "R$ 96,00",
            "R$ 95,00",
            "R$ 98,00",
            "R$ 100,00"
        ]
    },
    {
        "Pergunta": "Para fazer as matrículas de 100 alunos, 7 pessoas demoram 4 horas. Se mais uma pessoa ajudar a fazer as matrículas, quanto tempo irá demorar?",
        "Resposta": 4,
        "Alternativas": [            
            "3h40min",
            "3h50min",
            "3h20min",
            "3h30min",
            "3h10min",
            "3h00min"
        ]
    },
    {
        "Pergunta": "Uma cidade tem 79.000 habitantes. Durante uma campanha de vacinação, 32% da população da cidade foram vacinadas. Então, podemos dizer que o número de habitantes vacinados nesta cidade é",
        "Resposta": 3,
        "Alternativas": [            
            "25.300",
            "25.250",
            "25.280",
            "25.200",
            "25.480",
            "25.370"
        ]
    },
    {
        "Pergunta": " O médico receitou um remédio, mas orientou ao paciente para tomar 8 gotas por cada 12 kg do seu peso. Se o paciente pesa 72 kg ele tem que tomar:",
        "Resposta": 2,
        "Alternativas": [
            "50 gotas",
            "48 gotas",
            "42 gotas",
            "36 gotas",
            "56 gotas",
            "80 gotas"
        ]
    },
    {
        "Pergunta": "Determine um número real 'a' para que as expressões (3a + 6)/ 8 e (2a + 10)/6 sejam iguais.",
        "Resposta": 1,
        "Alternativas": [
            "22",
            "23",
            "24",
            "25",
            "21",
            "20"
        ]
    }
]

rank = [
    {
        "Nickname": "William",
        "Pontuação": "5",
        "Tempo": 20
    },
    {
        "Nickname": "Ramon",
        "Pontuação": "5",
        "Tempo": 33
    },
    {
        "Nickname": "João",
        "Pontuação": "2",
        "Tempo": 30
    }
]

var numero = [ 
    Math.floor(Math.random() * perguntas.length),
    Math.floor(Math.random() * perguntas.length),
    Math.floor(Math.random() * perguntas.length),
    Math.floor(Math.random() * perguntas.length),
    Math.floor(Math.random() * perguntas.length),
    Math.floor(Math.random() * perguntas.length)
];

var alternativa = 0;
var acertos = 0;
var tempo = 0;
var statusVol = false;
var musica = new Audio('musica/Bouncey.mp3');

$("section.inicio button.btn-inicio").on("click", function() {
    $("section.inicio").hide();
    $("section.jogo").show();
    localStorage.setItem('nick', $("#nick").val());
    $("section.jogo h1.pergunta").text(perguntas[numero[alternativa]]["Pergunta"]);
    $("section.jogo button#escolha1").text(perguntas[numero[alternativa]]["Alternativas"][0]);
    $("section.jogo button#escolha2").text(perguntas[numero[alternativa]]["Alternativas"][1]);
    $("section.jogo button#escolha3").text(perguntas[numero[alternativa]]["Alternativas"][2]);
    $("section.jogo button#escolha4").text(perguntas[numero[alternativa]]["Alternativas"][3]);
    $("section.jogo button#escolha5").text(perguntas[numero[alternativa]]["Alternativas"][4]);
    $("section.jogo button#escolha6").text(perguntas[numero[alternativa]]["Alternativas"][5]);

    setInterval(function() {
        tempo++;
        $("span.tempo").text(tempo);
    }, 1000)
});

$(".volume button").on("click", function() {
    if (statusVol === false) {
        musica.play();
        $("button#volume1").text("volume_up");
        $("button#volume2").text("volume_up");
        $("button#volume3").text("volume_up");
        $("button#volume4").text("volume_up");
        statusVol = true;
    } else {
        musica.pause();
        $("button#volume1").text("volume_off");
        $("button#volume2").text("volume_off");
        $("button#volume3").text("volume_off");
        $("button#volume4").text("volume_off");
        statusVol = false;
    }
});

$("button#poll").on("click", function() {
    $("section.inicio").hide();
    $("section.jogo").hide();
    $("section.final").hide();
    $("section.ranking").show();

    var table = document.getElementById("tabela2");
    for (i=0; i<rank.length; i++) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = rank[i]["Nickname"];
        cell2.innerHTML = rank[i]["Pontuação"];
        cell3.innerHTML = rank[i]["Tempo"]+"s";
    }
});

$("section.jogo button#escolha1").on("click", function() {
    if (1 === perguntas[numero[alternativa]]["Resposta"]) {
        acertos++;
        $("section.jogo button.ind"+alternativa).css("background-color", "green");
    } else {
        $("section.jogo button.ind"+alternativa).css("background-color", "red");
    }
    $("#pontosjogo").text(acertos);
});

$("section.jogo button#escolha2").on("click", function() {
    if (2 === perguntas[numero[alternativa]]["Resposta"]) {
        acertos++;
        $("section.jogo button.ind"+alternativa).css("background-color", "green");
    } else {
        $("section.jogo button.ind"+alternativa).css("background-color", "red");
    }
    $("#pontosjogo").text(acertos);
});

$("section.jogo button#escolha3").on("click", function() {
    if (3 === perguntas[numero[alternativa]]["Resposta"]) {
        acertos++;
        $("section.jogo button.ind"+alternativa).css("background-color", "green");
    } else {
        $("section.jogo button.ind"+alternativa).css("background-color", "red");
    }
    $("#pontosjogo").text(acertos);
});

$("section.jogo button#escolha4").on("click", function() {
    if (4 === perguntas[numero[alternativa]]["Resposta"]) {
        acertos++;
        $("section.jogo button.ind"+alternativa).css("background-color", "green");
    } else {
        $("section.jogo button.ind"+alternativa).css("background-color", "red");
    }
    $("#pontosjogo").text(acertos);
});

$("section.jogo button#escolha5").on("click", function() {
    if (5 === perguntas[numero[alternativa]]["Resposta"]) {
        acertos++;
        $("section.jogo button.ind"+alternativa).css("background-color", "green");
    } else {
        $("section.jogo button.ind"+alternativa).css("background-color", "red");
    }
    $("#pontosjogo").text(acertos);
});

$("section.jogo button#escolha6").on("click", function() {
    if (6 === perguntas[numero[alternativa]]["Resposta"]) {
        acertos++;
        $("section.jogo button.ind"+alternativa).css("background-color", "green");
    } else {
        $("section.jogo button.ind"+alternativa).css("background-color", "red");
    }
    $("#pontosjogo").text(acertos);
});

$("section.jogo button.escolha").on("click", function() {
    alternativa++;
    if (alternativa < 5) {
        $("section.jogo h1.pergunta").text(perguntas[numero[alternativa]]["Pergunta"]);
        $("section.jogo button#escolha1").text(perguntas[numero[alternativa]]["Alternativas"][0]);
        $("section.jogo button#escolha2").text(perguntas[numero[alternativa]]["Alternativas"][1]);
        $("section.jogo button#escolha3").text(perguntas[numero[alternativa]]["Alternativas"][2]);
        $("section.jogo button#escolha4").text(perguntas[numero[alternativa]]["Alternativas"][3]);
        $("section.jogo button#escolha5").text(perguntas[numero[alternativa]]["Alternativas"][4]);
        $("section.jogo button#escolha6").text(perguntas[numero[alternativa]]["Alternativas"][5]);
    } else {
        $("section.jogo").hide();
        $("section.final").show();
        $("span.tempo2").text(tempo).text = " "+$("span.tempo").text(tempo);
        $("section.final span.pontuacao").text(" "+acertos);

        var table = document.getElementById("tabela");
        for (i=0; i<rank.length; i++) {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = rank[i]["Nickname"];
            cell2.innerHTML = rank[i]["Pontuação"];
            cell3.innerHTML = rank[i]["Tempo"]+"s";
        }

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = localStorage["nick"];
        cell2.innerHTML = acertos;
        cell3.innerHTML = tempo+"s";
    }
});

$("section.final button.btn-novamente").on("click", function() {
    location.reload();
});

$("section.ranking button.btn-menu").on("click", function() {
    location.reload();
});