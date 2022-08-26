const arr = [2, 1, 3, 3, 2, 1, 4, 4];
const noDuplicatedarr = [1, 3, 4, 2];

// Given an Array, find the first duplicate value that occurs.
// If there are no duplicates, return -1.

function findDuplicate(input) {
  // iterate over each element
  let duplicate = -1;

  for (i = 0; i < input.length; i++) {
    // grab the element from index and iterate over except for that element index
    if (input[i] === input[i + 1]) {
      duplicate = input[i];
      break;
    }
    // if the element is the same as the object, return the number
    // else return -1
  }

  console.log(duplicate);
}

findDuplicate(arr);
findDuplicate(noDuplicatedarr);
