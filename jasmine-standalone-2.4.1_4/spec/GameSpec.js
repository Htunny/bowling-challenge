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

 describe("Playing the game", function(){
   it("knocks down pins when played", function(){
     spyOn(Math, "random").and.returnValue(0.5)
     game.bowl();
     expect(game.points).toEqual([5])
   });
   it("awards points to the player based on how many pins are knocked down", function(){
     spyOn(Math, "random").and.returnValue(0.5)
     game.bowl();
     game.bowl();
     expect(game.printScore()).toEqual(10)
   })
  //  it("returns with a strike message when 10 pins are hit", function(){
  //    spyOn(Math, "random").and.returnValue(0.95)
  //    expect(function(){game.bowl();}).toEqual("STTRRRIIIKKKKEEE!");
  //  });
 });

});
