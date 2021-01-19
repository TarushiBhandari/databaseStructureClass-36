var database;
var playerCount;
var form, player;
var gameState=0, game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  // form= new Form();
  // form.display();

  game= new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
    drawSprites();
  
}