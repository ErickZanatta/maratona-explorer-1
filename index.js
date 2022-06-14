const elemntoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector("#inputPergunta")
const buttonpergunta = document.querySelector('#buttonpergunta')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta() {
  
  if(inputPergunta.value == "") {
    alert("digite sua pergunta")
    return
  }

  buttonpergunta.setAttribute("disabled",true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elemntoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elemntoResposta.style.opacity = 1
  setTimeout(function() {
    elemntoResposta.style.opacity = 0;
    buttonpergunta.removeAttribute('disabled')
  }, 3000)

}