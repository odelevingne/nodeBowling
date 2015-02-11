var Game = require('../src/game')

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  })

  it('has a zero score as default', function(){
    expect(game.score()).toEqual(0);
  });

  it('should be able to play a frame', function(){
    game.playFrame(2,5);
    expect(game.score()).toEqual(7);
  });

  it('should be able to play a second frame', function(){
    game.playFrame(2,5);
    game.playFrame(4,5);
    expect(game.score()).toEqual(16);
  });

  it('should be able to play a third frame', function() {
    game.playFrame(2,5);
    game.playFrame(4,5);
    game.playFrame(3,3);
    expect(game.score()).toEqual(25);
  })

});
