/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = {};

  for (const obj of arr1) {
    result[obj.id] = obj;
  }

  for (const obj of arr2) {
    result[obj.id] = { ...result[obj.id], ...obj };
  }

  return Object.values(result);
};
