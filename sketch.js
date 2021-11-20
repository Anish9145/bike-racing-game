var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bikes, bike1,bike2;

var track, bike1_img, bike2_img;

function preload(){
  track = loadImage("images/track.jpg");
  bike1_img = loadImage("images/player1.png");
  bike2_img = loadImage("images/player2.png");
  //ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
//display ranking
if (gameState === 2 && finishedPlayers === 2) {
  game.displayRanks();
}
function keyPressed() {
if (keyCode === 13 && gameState !== 1 && passedFinish === false) {
  form.enter();
  console.log("hai");
  passedFinish = true;
}
}