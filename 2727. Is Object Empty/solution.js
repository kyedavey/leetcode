/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (const any in obj) {
    return false;
  }
  return true;
};
