const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameDreamTeam = [];
  if (!Array.isArray(members)) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let name = members[i].trim();
      nameDreamTeam.push(name[0].toUpperCase());
    }
  }
  return nameDreamTeam.sort().join('');
};
