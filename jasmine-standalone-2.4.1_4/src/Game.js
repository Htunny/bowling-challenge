'use strict';

function Game(){
  this.points = []
  this.score = 0
}

Game.prototype.bowl = function(){
  var play = Math.floor((Math.random() * 11));
  this.points.push(play);
  if(play <= 9) {
    return "You knocked down " + play + " pins. Go again!";
  }
  else {
    return "STTRRRIIIKKKKEEE!";
  };
};

Game.prototype.printScore = function(){
  var count=0;
  for(var i=0; i < this.points.length; i++) {
   count = count + this.points[i];
 };
 return count;
};
