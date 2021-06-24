/*jshint esversion: 6 */

//Start the game
function startGame() 
{
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    setTimeout(() => {
        startBlinking();
    }, 1000);
}
/* All 4 color of blocks */
let redBlock = document.querySelector('.redBlock');
let greenBlock = document.querySelector('.greenBlock'); 
let blueBlock = document.querySelector('.blueBlock');
let orangeBlock = document.querySelector('.orangeBlock');

// Unmute both audio files
document.getElementById("correct").muted = false;
document.getElementById('wrong').muted = false; 

/*Generate one random block during the gameplay */
const getRandomBlock = () => {
    const allBlocks = [redBlock,greenBlock,orangeBlock,blueBlock];
    return allBlocks[parseInt(Math.random() * allBlocks.length)];
};

// Get the random generated block through function call
let sequence = [getRandomBlock()];
let sequenceToGuess = [...sequence];

const blink = block => {
    return new Promise((resolve, reject) => {
        //unmute the audio sound
        document.getElementById('correct').muted = false;
        //add the active class on the block to identify which is generated and is blinking
        block.classList.add('active');
        //Play the audio on blinking block
        let correct = document.getElementById('correct'); 
        correct.play();
        //After 300ms delay, remove the active class from the blinking block
        setTimeout(() => {
            document.getElementById('correct').muted = true;
            document.getElementById('correct').pause();
            document.getElementById('correct').currentTime = 0;
            block.classList.remove('active');
            //The gap of 150ms in between each block blinking
            setTimeout(() => {
                resolve();
            }, 150);
        }, 300);
    });
};
//set click false on block
let allowClick = false;
const blockClicked = blockClicked => {
    if(!allowClick) return;
    let expectedBlock = sequenceToGuess.shift();
    if(expectedBlock === blockClicked) 
    {
        document.getElementById('correct').muted = false;
        let correct = document.getElementById('correct');
        correct.play();
        setTimeout(() => {
            document.getElementById('correct').muted = true;
            document.getElementById('correct').pause();
            document.getElementById('correct').currentTime = 0;
        }, 500);
        if(sequenceToGuess.length === 0) 
        {
            let currentLevel = parseInt(document.getElementById('level').innerHTML);
            currentLevel = currentLevel+1;
            document.getElementById('level').innerHTML = currentLevel;
            sequence.push(getRandomBlock());
            sequenceToGuess = [...sequence];
            setTimeout(() => {
                startBlinking();
            }, 750);
        }
    }
    //If expected block is not the same as clicked block, play the wrong audio sound
    else {
        let wrong = document.getElementById('wrong');
        wrong.play();
        let bLength = document.querySelectorAll('.panel');
        for (let b = 0; b < bLength.length; b++) 
        {
            bLength[b].style.pointerEvents = 'nome';
        }
        //Get the current level
        let currentLevel = parseInt(document.getElementById('level').innerHTML);
            currentLevel = currentLevel - 1;
            document.getElementById('game').style.display = 'none';
            document.getElementById('results').style.display = 'block';
            document.getElementById('finallevel').innerHTML = currentLevel;
    }
};

//Start blinking of the block which are in sequense
const startBlinking = async() => {
    allowClick = false;
    for (let block of sequence) 
    {
        await blink(block);
    }
    allowClick = true;
};

//Restart the game function
function restartGame() 
{
    window.location.reload();
}