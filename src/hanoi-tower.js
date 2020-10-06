const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SEC_PER_OUR = 60 * 60;
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.floor(SEC_PER_OUR / turnsSpeed * turns);
  return { turns, seconds };
  // remove line with error and write your code here
};
