
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let towel = []
  matrix.forEach((element, index) => {
    towel.push(element.sort((a, b) => ((index%2==0)?(a-b):(b-a))));
  });
  return towel.join().split(',').map(v=>v*1);
}

module.exports([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ])
