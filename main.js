const player1 = {
    name:'Scorpion',
    hp: 30,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['blade','gun','fire'],
    attack: function(){
        console.log(this.name+'Fight..')
    }
}
const player2 = {
    name:'Sonya',
    hp: 60,
    img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['leg','knife','ball'],
    attack: function(){
        console.log(this.name+'Fight..')
    }
}
const createPlayer = function(classPlayer, {name, hp, img}){
    const $player1 = document.createElement('div')
    $player1.classList.add(classPlayer)
    const $progressBar = document.createElement('div')
    $progressBar.classList.add('progressbar')
    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = hp+'%'
    const $namePlayer = document.createElement('div')
    $namePlayer.classList.add('name')
    $namePlayer.innerText = name
    $progressBar.appendChild($life)
    $progressBar.appendChild($namePlayer)
    const $character = document.createElement('div')
    $character.classList.add('character')
    const $img1 = document.createElement('img')
    $img1.src = img
    $character.appendChild($img1)
    $player1.appendChild($character)
    $player1.appendChild($progressBar)
    const $arenas = document.querySelector('.arenas')
    $arenas.appendChild($player1)
}
createPlayer('player1', player1)
createPlayer('player2', player2)