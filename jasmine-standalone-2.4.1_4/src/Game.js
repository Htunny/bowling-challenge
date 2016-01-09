'use strict';

function Game(){
  this.points = []
}

Game.prototype.bowl = function(){
  return this.points.push(this.pins());
};

Game.prototype.pins = function(){
  return Math.floor((Math.random() * 10) + 1);
};
