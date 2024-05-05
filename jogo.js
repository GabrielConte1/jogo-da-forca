var entrada;
var respostaAtual;
var perguntaAtual;
var maxTentativas = 5;
var tentativas = maxTentativas;
var letrasErradas = [];
var letrasCertas = [];
var letras = [];
var fimDeJogo = false;

function iniciarJogo() {
  tentativas = maxTentativas;
  letrasErradas = [];
  letrasCertas = [];
  letras = [];
  fimDeJogo = false;

  perguntaAtual = pegarPergunta();
  respostaAtual = perguntaAtual.resposta.split('');
  letras = respostaAtual.map(function () {
    return '_';
  });
  atualizarPlacar();
}

function pegarPergunta() {
}

function atualizarPlacar() {
 
}

function adivinharLetra(letra) {
  if (fimDeJogo) {
    return;
  }

  if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) {
    return;
  }

  if (respostaAtual.includes(letra)) {
   
    for (var i = 0; i < respostaAtual.length; i++) {
      if (respostaAtual[i] === letra) {
        letras[i] = letra;
      }
    }
  } else {
    
    tentativas--;
    letrasErradas.push(letra);
  }

  atualizarPlacar();

  if (!letras.includes('_')) {
    fimDeJogo = true;
    alert('Você ganhou!');
  }

  if (tentativas === 0) {
    fimDeJogo = true;
    alert('Você perdeu!');
  }
}

inicializarJogo();