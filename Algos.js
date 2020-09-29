//Body of algo problems
console.log("hello world");

//Sum of two numbers
let sumOfTwoNumbers = (a, b) => a + b;

console.log(sumOfTwoNumbers(7, 9));

//Minutes into seconds
let minIntoSeconds = (a) => a * 60;

console.log(minIntoSeconds(5));

//Age in seconds function

let yourAgeInSeconds = (age) => age * 365 * 24 * 60 * 60;

console.log(yourAgeInSeconds(41));

//Return first item in array
let returnFirst = (array) => array[0];

console.log(returnFirst(["Banana", "apples", "carrots"]));

//Return min in an array

let returnMin = (array) => {
  let i = 0;
  let min = array[0];
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    i++;
  }
  return min;
};

console.log(returnMin([2, 3, 5, 87, 0, 1]));

//Return max in an array

let returnMax = (array) => {
  let i = 0;
  let max = array[0];
  while (i < array.length) {
    if (array[i] > max) {
      min = array[i];
    }
    i++;
  }
  return max;
};

// Sort by biggest number

function sortNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

// Sort by biggest number with call back
let findMax = (array, start) => {
  let i = start;
  let max = array[start];
  let max_location = start;
  while (i < array.length) {
    if (array[i] > max) {
      max = array[i];
      max_location = i;
    }
    i++;
  }
  return { max_number: max, max_index: max_location };
};

function sortNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    max = findMax(array, i);
    max_num = max["max_number"];
    max_location = max["max_index"];

    array[max_location] = array[i];
    array[i] = max_num;
  }
  return array;
}

console.log(sortNumbers([5, 6, 2, 3, 8, 9, 10]));
