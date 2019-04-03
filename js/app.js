const qwerty = document.getElementById('qwerty');
const qwertyDiv = document.querySelector('#qwerty');

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
    let match = null;
    const letters = document.getElementsByClassName("letter");
    for (let i = 0; i < letters.length; i += 1) {
        if (letters[i].textContent === button.textContent) {
            letters[i].className = 'show';
        }
    return match;
        
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

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON"){
        e.target.className = "chosen";
        e.target.disable = true;

        checkLetter(e.target)
        console.log(e.target.textContent)
    };
    
});