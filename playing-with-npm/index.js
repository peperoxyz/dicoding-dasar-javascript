import _ from "lodash";

// cara 1 for looping
const myArray = [2, 4, 22, 19];
let sum = 0;

for (let i = 0; i < myArray.length; i++) {
  sum += myArray[i];
}

console.log(`cara 1 for loop: ${sum}`);

// cara 2 reduce
const myArray2 = [2, 4, 22, 19];
let sum2 = myArray2.reduce((a, b) => {
  return a + b;
});

console.log(`cara 2 reduce: ${sum2}`);

// cara 3 lodash
const myArray3 = [2, 4, 22, 19];
let sum3 = _.sum(myArray3);

console.log(`cara 3 lodash: ${sum3}`);
