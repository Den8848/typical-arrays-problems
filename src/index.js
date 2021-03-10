
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0
  } else {
    return Math.min.apply(null, array)
  }
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0
}
  return Math.max.apply(null, array)
}

exports.avg = function avg (array) {
  let result = 0
  if (!array || array.length === 0) {
      return 0
  }
  for (let i in array) {
      result += array[i]
  }
  let arrLen = array.length
  return avg = result/arrLen
}
