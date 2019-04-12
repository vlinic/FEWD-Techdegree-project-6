//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const start = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');
const phaseUl = phrase.querySelector('ul');
const phaseli = phaseUl.querySelectorAll('li');
const letter = document.getElementsByClassName('letter');
const tries = document.querySelectorAll('.tries img');
const show = document.getElementsByClassName('show');
const title = document.getElementsByClassName('title');



//Phrases

const phrases = [
    'Just do it',
    'Impossible is nothing',
    'Give me everything',
    'World is not enough',
    'Nothing else matters'
];

//Functions

const getRandomPhraseAsArray = (arr) => {
    let randomPhase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhase.split('');
}

const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i];
        const li = document.createElement('li');
        if (letter === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
            li.textContent = letter;
        }
        phaseUl.appendChild(li);
    }
}

const checkLetter = (button) => {
    let match = null;
    for (let i = 0; i < letter.length; i++) {
        if (button.textContent.toLowerCase() === letter[i].textContent.toLowerCase()) {
            letter[i].classList.add('show');
            match = true;
        }
    }
    return match;
}

const checkWin = () => {
    if (show.length === letter.length) {
        overlay.style.display = '';
        overlay.classList.add('win');
        title[0].textContent = "You won";
        reset()
    } else if (missed >= 5) {
        overlay.style.display = '';
        overlay.classList.add('lose');
        title[0].textContent = "You Lost";
        reset();
    }
}
const newPhrase = () => {
    overlay.style.display = 'none';
    overlay.className = '';
    const phrase = getRandomPhraseAsArray(phrases)
    addPhraseToDisplay(phrase);
}


const reset = () => {
    const button = document.getElementsByTagName('button');
    start.textContent = "Play Again";
    missed = 0;
    phaseUl.querySelectorAll('li').forEach(el => el.remove());

    for (let i = 0; i < button.length; i++) {
        button[i].className = '';
        button[i].disabled = false;
    }

    for (let i = 0; i < tries.length; i++) {
        tries[i].src = 'images/liveHeart.png';
    }

}

//Events

start.addEventListener('click', newPhrase);

qwerty.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.disabled = true;

        let letterFound = checkLetter(e.target);

        if (letterFound) {
            checkWin();
        } else {
            missed += 1;
            tries[missed - 1].src = 'images/lostHeart.png';
            checkWin();
        }
    }
});