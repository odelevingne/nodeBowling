var Game = require('../src/game')

describe('Game', function(){
  it('has a zero score as default', function(){
    var game = new Game();
    expect(game.score).toEqual(0);
  });
});