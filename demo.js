var palavra = "banana";
var maxErros = 5;
var erros = 0;
var letras = [];

function tentar(letra) {
    if (erros < maxErros) {
        if (palavra.indexOf(letra) == -1) {
            erros++;
            if (erros == maxErros) {
                return 'Suas vidas acabaram';
            } else {
                return 'Continue tentando';
            }
        } else {
            letras.push(letra);
            var revelacao = [];
            // buscar as letras informadas na palavra
            for (var i=0; i<palavra.length; i++) {
                if (letras.indexOf(palavra[i]) == -1) {
                    revelacao.push('_');
                } else {
                    revelacao.push(palavra[i]);
                }
            }
            // revelar as letras corretas na palavra
            return revelacao;
        }
    } else {
        return 'O jogo ja foi encerrado! Você tinha perdido!'
    }
};