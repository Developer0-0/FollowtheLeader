// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var cluePauseTime = 333; //how long to pause in between clues
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;

// Gameplay Functions
function startGame(){
  
    //initialize game variables
    progress = 0;
    mistakes = 0;
    gamePlaying = true;
    cluePauseTime = 333;
  // Randomize Pattern
  for (var i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 5) + 1;
  } 
  // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (pattern[guessCounter] == btn || mistakes < 2) {
    // Correct Guess or less than 3 mistakes
    if (pattern[guessCounter] != btn) {
      mistakes++;
    }
    if (guessCounter == progress) {
      // Turn is over
      if (progress == pattern.length - 1) {
        // End of pattern
        winGame();
      } else {
        // Not end of pattern
        progress++;
        playClueSequence();
      }
    } else {
      // Turn is not over
      guessCounter++;
    }
  } else {
    // Incorrect Guess
    loseGame();
  }
}

// Button Lighting Functions
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  cluePauseTime = cluePauseTime - 40;
}

// Sound Synthesis Functions
const freqMap = {
  1: 291.6,
  2: 369.6,
  3: 432,
  4: 496.2,
  5: 530.4,
  6: 583.5,
  7: 310
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    if (btn != 2) {
      l.frequency.value = freqMap[2]
    } else {
      l.frequency.value = freqMap[7]
    }
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}


//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var l = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
l.connect(g)
l.start(0)