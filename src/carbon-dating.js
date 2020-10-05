const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    let value = parseFloat(sampleActivity);
    if (value > 0 && value < MODERN_ACTIVITY) {
      return 1 / HALF_LIFE_PERIOD * LOG_2 / value;
    }
  }
  return false;

};
