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

});
