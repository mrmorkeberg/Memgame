/* All 4 color of blocks */
let redBlock = document.querySelector('.redBlock');
let greenBlock = document.querySelector('.greenBlock'); 
let blueBlock = document.querySelector('.blueBlock');
let orangeBlock = document.querySelector('.orangeBlock');

// Unmute both audio files
document.getElementById('correct').muted = false;
document.getElementById('wrong').muted = false; 

/*Generate one random block during the gameplay */
const getRandomBlock = () => {
    const allBlocks = [redBlock, greenBlock, orangeBlock, blueBlock];
    return allBlocks [parseInt(Math.random() * allBlocks.length)];
}
// Get the random generated block through function call
let sequence = [getRandomBlock()];
let sequenceToGuess = [...sequence];

const blink = block => {
    return new Promise ((resolve, reject) => {
        //unmute the audio sound
        document.getElementById('correct').muted = false;
        //add the active class on the block to identify which is generated and is blinking
        block.classList.add('active');
        //Play the audio on blinking block
        let correct = document.getElementById('correct'); correct.play();
        //After 750ms dely, remove the active class from the blinking block
        setTimeout (() => {
            document.getElementById('correct').muted = true;
            document.getElementById('correct').pause();
            document.getElementById('correct').currentTime = 0;
            block.classList.remove('active');
            //The gap of 250ms in between each block blinking
            setTimeout(() => {
                resolve();
            }, 250);
        }, 750);
    });
};
//set click false on block
let allowClick = false;
const blockClicked = blockClicked => {
    if(!allowClick) return;
    let expectedBlock = sequenceToGuess.shift();
    if(expectedBlock === blockClicked) {
        document.getElementById('correct').muted = false;
        let correct = document.getElementById('correct');
        correct.play();
        setTimeout(() => {
            document.getElementById('correct').muted = true;
            document.getElementById('correct').puase();
            document.getElementById('correct').currentTime = 0;
        }, 500);
        if(sequenceToGuess.length === 0) 
    }