//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
