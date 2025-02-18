const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

const spriteWidth = 575;
const spriteHeight = 523;
const staggerFrames = 5;
const spriteAnimations = [];

let gameFrame = 0;
let soundInterval;
let previousPlayerState = null; // Initialize previousPlayerState to null
let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e) {
  playerState = e.target.value;  
  makeSound();
});

const animationStates = [
	{
		name: "idle",
		frames: 7,
        sound: 'sounds/idle.mp3',
	},
	{
		name: "jump",
		frames: 7,
        sound: 'sounds/jump.mp3',
	},
	{
		name: "fall",
		frames: 7,
        sound: 'sounds/fall.mp3',
	},
	{
		name: "run",
		frames: 9,
        sound: 'sounds/run.mp3',
	},
	{
		name: "dizzy",
		frames: 11,
        sound: 'sounds/dizzy.mp3',
	},
	{
		name: "sit",
		frames: 5,
        sound: 'sounds/sit.mp3',
	},
	{
		name: "roll",
		frames: 7,
        sound: 'sounds/roll.mp3',
	},
	{
		name: "bite",
		frames: 7,
        sound: 'sounds/bite.mp3',
	},
	{
		name: "ko",
		frames: 12,
        sound: 'sounds/ko.mp3',
	},
	{
		name: "getHit",
		frames: 4,
        sound: 'sounds/getHit.mp3',
	},
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: []
  };

  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.loc.push({ x: positionX, y: positionY });
  }

  spriteAnimations[state.name] = frames;
});

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;

  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].loc[position].y;

  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

  gameFrame++;
  requestAnimationFrame(animate);
}

function makeSound() {
    // In your animation loop or event handler:
  if (playerState !== previousPlayerState) {
    const sound = animationStates.find(state => state.name === playerState)?.sound;
    if (sound) {
        new Audio(sound).play();
        clearInterval(soundInterval); // Clear any existing interval
        soundInterval = setInterval(() => {
          new Audio(sound).play();
        }, 1700); // Play the sound every 1 second
    }
    previousPlayerState = playerState;
  }
}

animate();

const animationSequence = ['idle', 'jump', 'fall', 'run', 'dizzy', 'sit', 'roll', 'bite', 'ko', 'getHit'];

function playAnimations() {
  let currentAnimationIndex = 0;

  function playNextAnimation() {
    const animationName = animationSequence[currentAnimationIndex];
    if (animationName) {
        animate();
      currentAnimationIndex++;
      setTimeout(playNextAnimation, 500); // Adjust the delay as needed
    }
  }

  playNextAnimation();
}