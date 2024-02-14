function hiddenElement(elementId){
    const elementHidden = document.getElementById(elementId)
    elementHidden.classList.add('hidden')
}

function showElement(elementId){
    const showElement = document.getElementById(elementId)
    showElement.classList.remove('hidden')
}

function getRandomAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetString = alphabets.split('')
    console.log(alphabetString)

    const randomNumber = Math.random() * 25
    const indexNo = Math.round(randomNumber)
    console.log(indexNo)

    const alphabet = alphabetString[indexNo]
    console.log(alphabet)
    return alphabet;
}

function setBackgroundColor(elementId){
    const setColor = document.getElementById(elementId)
    setColor.classList.add('bg-orange-400')
}