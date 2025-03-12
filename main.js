const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnCookie = document.querySelector('.btnCookie')
const btnReset = document.querySelector('.btnReset')
const phraseOpenedCookie = document.querySelector('.phraseOpenedCookie')

const phrasesList = [
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
]

let lastPhrase = "";

btnCookie.addEventListener('click', showPhraseOpenedCookie)
btnReset.addEventListener('click', handleToggle)

function showPhraseOpenedCookie() {
  handleToggle()

  let newPhrase;
  do {
    newPhrase = phrasesList[Math.floor(Math.random() * phrasesList.length)];
  } while (newPhrase === lastPhrase);

  phraseOpenedCookie.innerText = newPhrase;

  console.log(phraseOpenedCookie.innerText)
}

function handleToggle() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}