const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = (typeof str != 'string') ? String(str) : str;
  let separator = (options.separator === undefined) ? '+' : options.separator;
  let repeatTimes = (options.repeatTimes === undefined) ? 1 : options.repeatTimes;
  let addition = (options.addition === undefined) ? '' : String(options.addition);
  let additionSeparator = (options.additionSeparator === undefined) ? '|' : options.additionSeparator;
  let additionRepeatTimes = (options.additionRepeatTimes === undefined) ? 1 : options.additionRepeatTimes;

  let resultString = '';
  let additionResultString = '';

  let arrayMainString = [];
  let arrayAdditionString = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    arrayAdditionString.push(addition);
  }

  additionResultString = str + arrayAdditionString.join(additionSeparator);

  for (let i = 0; i < repeatTimes; i++) {
    arrayMainString.push(additionResultString);
  }

  resultString = arrayMainString.join(separator)


  // STRINGPLUS00PLUS00PLUS00 ** STRINGPLUS00PLUS00PLUS00 ** STRINGPLUS00PLUS00PLUS00
  // STRINGPLUS00PLUS00PLUS ** STRINGPLUS00PLUS00PLUS ** STRINGPLUS00PLUS00PLUS
  return resultString;
};
