
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return  (matrix && matrix.length > 0) ? (matrix.reduce((a,b, index) => index%2>0 ? a.concat(b.reverse()) : a.concat(b))) : []
}
