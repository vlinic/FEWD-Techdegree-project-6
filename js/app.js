//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const start = document.getElementsByClassName('btn__reset')[0];
const overlay = document.getElementById('overlay');
const phaseUl = phrase.querySelector('ul');
const letter = document.getElementsByClassName('letter');
const tries = document.querySelectorAll('.tries img');
const show = document.getElementsByClassName('show');
const title = document.getElementsByClassName('title');

//Phrases

const phrases = [
    'just do it',
    'impossible is nothing',
    'give me everything',
    'world is not enough',
    'nothing else matters'
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
        if (button.textContent === letter[i].textContent) {
            letter[i].classList.add('show');            
            match = true;
        }
    }
    return match;
}

const checkWin = () => {
    if (show.length === letter.length){
        overlay.style.display = '';
        overlay.classList.add('win');
        title[0].textContent = "You won!";        

    } else if (missed >= 5){
        overlay.style.display = '';
        overlay.classList.add('lost');
        title[0].textContent = "You Lost";

    }

}



//Events

start.addEventListener('click', () => {
    overlay.style.display = 'none';
    const phrase = getRandomPhraseAsArray(phrases)
    addPhraseToDisplay(phrase);
    console.log(phrase);
    console.dir(phrase[1]);
});

qwerty.addEventListener('click', (e) => {
    // when user clicks a key to match with phrase
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.disabled = true;

        let letterFound = checkLetter(e.target);

        if ( letterFound ){
            checkWin();
        }else{
            missed += 1;
            tries[missed - 1 ].src= 'images/lostHeart.png';
            checkWin(); 
            
        }

    }
});