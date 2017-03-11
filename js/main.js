const $d = require('./../DomSawyer/lib/main');
const View = require('./snake-view');

$d( () => {
  const view = new View($d('.grid'));
  view.drawBoard();
  // $d(window).on("keydown", function(e) {
  //   view.handleKeyEvent(e);
  // });
  // let highScore = localStorage.getItem('snakeScore') || 50;
  // $d('.highscore').text(`Highscore: ${highScore}`);
});
