// function play(){
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
    
// }

function continueGame(){
    const alphabet = getRandomAlphabet()
    const showAl = document.getElementById('currentAl')
    showAl.innerText = alphabet
    setBackgroundColor(alphabet)
}

function play(){
    hiddenElement('home')
    showElement('play-ground')
    continueGame()
}