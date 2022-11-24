const wordSearch = (letters, word) => {
  let newArr = [];
  const horizontalJoin = letters.map((ls) => ls.join(""));
if (letters.length <= 0) {
    return false
}
  for (l of horizontalJoin) {
    // for (x in verticalJoin)
    if (l.includes(word)) return true;
  }
  const result = [];

  for (let i = 0; i < letters[0].length; i++) {
    result.push([]);
    for (let x = 0; x < letters.length; x++) {
      result[i].push(letters[x][i]);
    }
    console.log(result)
  }
    const verticalJoin = result.map((xs) => xs.join(""));
    for (l of verticalJoin) {
      // for (x in verticalJoin)
      if (l.includes(word)) return true;
    }
    return false;
  
};
// need another for loop to check for the word vertically
// will have to rebuild the array with the vertical words
// loop through those words
// transposing new array
module.exports = wordSearch;

const result = wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "FRANK"
);
console.log(result)