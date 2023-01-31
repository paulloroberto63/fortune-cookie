const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const clickCookie = document.querySelector('#clickCookie')
const openCookie = document.querySelector('#openCookie')
const message = document.querySelector('.message')

const phrases = [
    'Procure acender uma vela em vez de amaldiçoar a escuridão',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu',
    'A vida trará coisas boas se tiver paciência',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si',
    'Não compense na ira o que lhe falta na razão',
    'Defeitos e virtudes são apenas dois lados da mesma moeda',
    'A maior de todas as torres começa no solo',
    'Não há que ser forte. Há que ser flexível',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'A juventude não é uma época da vida, é um estado de espírito.'
]

function textRandom() {
    let randomSentence = Math.floor((Math.random() * 10))
    message.textContent = phrases[randomSentence]
}

function fullScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

clickCookie.addEventListener('click', function()  {
    fullScreen()
    textRandom()
})

openCookie.addEventListener('click', fullScreen)