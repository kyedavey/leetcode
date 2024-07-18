/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
  arr.forEach((element, index) => {
    arr[index] = fn(element, index);
  });
  return arr;
};
