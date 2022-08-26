let fibonacci = [0, 1];

function findFibonacci(index) {
  // iterate over the fibonacci
  for (i = 0; i < index + 1; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
  }
  // add index to index +1

  // return specific fibonacci number [index]
  console.log(fibonacci[index]);
}

findFibonacci(3);
