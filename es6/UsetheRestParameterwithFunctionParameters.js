//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}