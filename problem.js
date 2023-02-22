// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

let arr = (x, y, z) => x * y * z;
// console.log(arr(7,3,4));

// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

let description = `
I am a web developer.
I love to code.
I love to eat biriyani.
`
// console.log(description);

// 3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

arr = (p1, p2 = 'Hossen') => {
  const sum = p1 + p2;
  return sum;
}
// console.log(arr('Iqbal '));

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

// friends.forEach(friend => {
//   let getEven = [];
//   for (const i in friend) {
//     if (friend.length % 2 === 0) {
//       getEven.push(friend);
//     }
//   }
//   return getEven;
// });
// let friends = (['Iqbal', 'Sohel', 'PK', 'Reyazul', 'Shofik']);


// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.


// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = list.map(x => {
//   let square = x * x;
//   let sum = 0;
//   for (let i = 0; i < square.length; i++) {
//     const element = square[i];
//     let sum = sum + element;


//   }
//   let average = sum % element;
//   return average;
// });
// console.log(list);

// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

let num1 = [12, 45, 87, 23, 45, 91];
let num2 = [54, 69, 32, 75, 28, 31];
let findMaximum = (num1, num2) => {
  
}
