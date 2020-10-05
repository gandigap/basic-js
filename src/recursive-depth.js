const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let level = 1;
        level += this.calculateDepth(arr[i]);;
        if (level > depth) depth = level;
      }
    }
    return depth;
  }
};