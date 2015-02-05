var Frame = require('./frame')

function Game() {
  this.runningScore = 0;
  this.firstFrame = undefined;
}

Game.prototype.score = function() {
  return this.runningScore;
};

Game.prototype.playFrame = function(roll1, roll2) {
  if(this.currentFrame === undefined) {
    frame = new Frame;
    this.firstFrame = frame;
  }
  this.firstFrame.playFrame(roll1, roll2);
  this.runningScore = this.firstFrame.score()
};

module.exports = Game;
