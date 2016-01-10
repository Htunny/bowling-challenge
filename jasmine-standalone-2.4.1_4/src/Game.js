'use strict';

function Game(){
  // this.frame = new Frame();
  this.points = [];
}

Game.prototype.bowl = function(){
  var play = Math.floor((Math.random() * 11));
  this.points.push(play);
  if(play <= 9) {
    return "You knocked down " + play + " pins. Go again!";
  }
  else {
    console.log("STTRRRIIIKKKKEEE!");
  };
 };


Game.prototype.printScore = function(){
  var count=0;
  for(var i=0; i < this.points.length; i++) {
   count = count + this.points[i];
 };
 return count;
};
