var palavra, erros, letras;
var maxErros = 5;

function existe(onde, oque) {
  for (var i = 0; i < onde.length; i++) {
    if (onde[i] == oque) {
      return true;
    }
  }
}

function iniciar(segredo) {
  palavra = segredo;
  erros = 0;
  letras = [];
  console.clear();
}

function tentar(letra) {
  if (erros < maxErros) {
    if (existe(palavra, letra)) {
      letras.push(letra);
      var revelacao = [];
      // buscar as letras informadas na palavra
      for (var i = 0; i < palavra.length; i++) {
        if (existe(letras, palavra[i])) {
          revelacao.push(palavra[i]);
        } else {
          revelacao.push("_");
        }
      }
      // revelar as letras corretas na palavra
      return revelacao;
    } else {
      erros++;
      if (erros == maxErros) {
        return "Suas vidas acabaram";
      } else {
        return "Continue tentando";
      }
    }
  } else {
    return "O jogo ja foi encerrado! Você tinha perdido!";
  }
}
