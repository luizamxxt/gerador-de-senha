const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document. querySelector('#campo-senha')

LETRAMAISCULAS

campoSenha.value = 1230
// OPEN IN WEBVIEM  
 let LETRAMAISCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 // minusculas, numeros e simbolos

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
    gerasenha()
}

// BOTAO DE AUMeNTAR 


// FUNCAO DE CRIAR A SENHA ALEATÓRIO
  gerasenha()

  function gerasenha(){
      let senha= ""
      // LOOP - repetições
      for (let i = 0; < tamanhoSenha; i++){
         let numeroAleatório = Math.random() * 26;
          numeroAleatório = Math, FLOOR (numeroAleatório)
          senha = senha + let letrasMAISCULAS[numeroAleatório]
      }
         campoSenha.value = senha;
  }
 



























