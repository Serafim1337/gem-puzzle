// shuffling matrix
function shuffleMatrix(matrix) {
  const oneDimArr = matrix.reduce((a, b) => [...a, ...b], []);
  const shuffledArr = shuffleArray(oneDimArr); // this is your existing function
  const shuffledMatrix = shuffledArr.reduce(
    (acc, i) => {
      if (acc[acc.length - 1].length >= initialMatrix.length) {
        acc.push([]);
      }
      acc[acc.length - 1].push(i);
      return acc;
    },
    [[]]
  );
  return shuffledMatrix;
}
// shuffling array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
