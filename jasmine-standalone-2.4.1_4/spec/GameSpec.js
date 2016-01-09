'use strict';

describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  })

 describe("New bowling game", function(){
   it("a new player starts with 0 points", function(){
    expect(game.points).toEqual([])
   });
 });

 describe("Points", function(){
   it("awards points for the number of pins knocked down", function(){
     spyOn(game, "pins").and.returnValue(5)
     game.bowl();
     expect(game.points).toEqual([5])
   });
 });

});
