function add(a, b) {
  return a + b;
}

const arg1Str = process.argv[2];
const arg2Str = process.argv[3];


const num1 = parseInt(arg1Str);
const num2 = parseInt(arg2Str);

const result = add(num1, num2);

console.log(result);