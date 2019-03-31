const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phaseUl = phrase.querySelector('ul');
let missed = 0;
const ovarlay = document.getElementById('overlay');
const startGame = document.getElementsByClassName('btn__reset')[0];

const phrases = [
    'just do it',
    'impossible is nothing',
    'give me everything',
    'world is not enough',
    'nothing else matters'
];

//create function to get random phase array and then split it to single letters
function getRandomPhraseAsArray(arr) {
    const randomPhase = arr[Math.floor(Math.random() * arr.length)];
    const letters = randomPhase.split("");
    return letters;
}

//create function to add phase to display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let letter = arr[i];
        const li = document.createElement('li');
        if (letter === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        phaseUl.appendChild(li);
    }
}

//create check letter function
function checkLetter(button) {
    let letters = document.getElementsByClassName(letter);
    for (let i = 0; i < letters.length; i += 1) {
        if (letters[i] === button) {
            letters[i].className = 'show';
        } else {
            missed += 1;
        }
    }
}

//create CheckWin function
function CheckWin() { };


startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
    //appand phase to screen
    const phrase = getRandomPhraseAsArray(phrases)
    addPhraseToDisplay(phrase);
    console.dir(phrase);
});