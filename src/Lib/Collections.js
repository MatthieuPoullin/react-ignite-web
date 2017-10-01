export const convertToObject = (array = {}) => {
  return array.reduce(function (acc, cur, i) {
    acc[i] = cur
    return acc
  }, {})
}

export const arrayMax = (arr = []) => {
  var len = arr.length
  var max = -Infinity
  while (len--) {
    if (arr[len] > max) {
      max = arr[len]
    }
  }
  return max
}
