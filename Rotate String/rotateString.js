function leftRotation(string, i) {
  // set a variable for a rotated string
  let rotatedString =
    // take the rotated part of the string
    // combine it with the actual string starting from 0 to the taken part
    string.substring(i, string.length) + string.substring(0, i);
  return rotatedString;
}

function rightRotation(string, i) {
  // do the leftRotation function from the other side
  return leftRotation(string, string.length - i);
}

console.log(rightRotation("Apple", 2));

var removeDuplicates = function (chars) {
  let filteredNums = [];

  chars.forEach((num) => {
    if (!filteredNums.includes(num)) {
      filteredNums.push(num);
    }
  });

  return filteredNums;
};

console.log(removeDuplicates([1, 1, 2]));
