// const fun_1 = (count) => {
//   for (let i = count; i < 6; i++) console.log("hello world" + count);
// };
// fun_1(4);

// const square = (num) => {
//   return num * num;
// };

// console.log(square(5));

// //or

// const square2 = (num) => num * num;   //no need to give the return

// console.log(square2(2));

//call back function

const calculate = (a, b, operation) => {
  return operation(a, b);
};

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;

console.log(calculate(5, 6, addition));
console.log(calculate(5, 6, subtraction));
