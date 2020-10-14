const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    (value === undefined) ? this.chain.push(`'(  )'`) : this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (position === undefined || position <= 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let completeChain = this.chain;
    this.chain = [];
    return completeChain.join('~~');
  }
};

module.exports = chainMaker;
