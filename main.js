const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')
const player1 = {
    name:'Scorpion',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['blade','gun','fire'],
    attack: function(){
        console.log(this.name+'Fight..')
    },
    player:1,
}
const player2 = {
    name:'Sonya',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['leg','knife','ball'],
    attack: function(){
        console.log(this.name+'Fight..')
    },
    player:2,
}
const createElement = function(tag, className){
    const $tag = document.createElement(tag);
    if(className){
    $tag.classList.add(className)}
    return $tag
}

const createPlayer = function(playerObj){
    const $player = createElement('div', 'player'+playerObj.player)
    const $progressBar = createElement('div','progressbar')
    const $life = createElement('div', 'life')
    const $namePlayer = createElement('div', 'name')
    const $character = createElement('div','character')
    const $img1 =  createElement('img')

   

    $img1.src = playerObj.img     
    $life.style.width = playerObj.hp+'%'      
    $namePlayer.innerText = playerObj.name

    $progressBar.appendChild($life)
    $progressBar.appendChild($namePlayer)
    $character.appendChild($img1)
    $player.appendChild($character)
    $player.appendChild($progressBar)
    
    return $player
}


function changeHp(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
      
    player.hp-=Math.ceil(Math.random()*20);
    
    $playerLife.style.width = player.hp+'%';
    if (player.hp<=0){
        player.hp=0
        $playerLife.style.width = player.hp+'%';
        if(player.player == 1 ? player=player2 : player=player1){
        $arenas.appendChild(playerWin(player.name))}
        $randomButton.disabled = true;
    }
}

function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = name + ' win'
    return $loseTitle
}

$randomButton.addEventListener("click", function () {
    changeHp(player1)
    changeHp(player2)
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
