
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  let towel = []
  matrix.forEach((element, index) => {
    towel.push(element.sort((a, b) => ((index%2==0)?(a-b):(b-a))));
  });
  return (matrix.length > 0 && matrix)?(towel.join().split(',').map(v=>v*1)):[];
}
