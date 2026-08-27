const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document. querySelector('#campo-senha')

LETRAMAISCULAS

campoSenha.value = 1230

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao') 
 // pega o 1°botao = -
 botoes[0].onclick = diminuir;
 // funcao diminuir
function diminuir(){
      // diminuir  de 1 em 1 e mostra na tela
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
}

// BOTAO DE AUMeNTAR 
// pega o 1°botao = +
 botoes[1]. onclick = AUMENTAR;
 // funcao  AUMENTAR(){ 
 // aumentar de 1 em 1 e mostra na tela
 tamanhoSenha++;
 numeroSenha.textContent = tamanhoSenha;
}
 



























