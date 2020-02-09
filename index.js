import ConfettiGenerator from '.node-modules/confetti-js/dist/index.js';

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

console.log('hmmm')
