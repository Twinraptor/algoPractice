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

//template literals

let firstName = "john";
let lastName = "Fu";

let fullName = `${firstName} ${lastName}`;

console.log(fullName);

let searchResults = 5;
let output = `${
  searchResults == 0
    ? "No search results"
    : searchResults == 1
    ? "1 result"
    : `${searchResults} results`
}`;
console.log(output);

// arrow functions

getFullName = (fName, lName) => {
  let fullName = `${fName} ${lName}`;
  return fullName;
};

console.log(getFullName("Mike", "Smith"));

sortBy = (sortType = "Name", users) => console.log("Sorting by: ", sortType);

sortBy();
sortBy("moms");

//for loops

let fruits = ["bananas", "apples", "pears", "pineapple", "cherries"];

// console.log("For Loop:");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// console.log("For-Of:");
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// console.log("forEach:");
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });

console.log("Map:");
newFruits = fruits
  .map((fruit) => {
    console.log(fruit);
    return `${fruit} eaten`;
  })
  .filter((value) => {
    if (value == "bananas eaten") {
      return false;
    } else {
      return true;
    }
  });
console.log(newFruits);

//destructering

// let person = {
//   firstName= "John",
//   lastName= "Fu"
// }

// const {firsName, lastName} = person;

// or

// let firstName = person.firstName;
// let lastName = person.lastName;

let user = [
  { firstName: "Pacman", lastName: "Jones" },
  (user) => {
    console.log("I set user: ", user);
  },
];

const [newUser, setUser] = user;
console.log(newUser);
setUser({ firstName: "coolio", lastName: "star" });

//direct mapping

let [fruit1, fruit2, fruit3] = [
  "bananas",
  "apples",
  "pears",
  "pineapple",
  "cherries",
];
console.log(fruit1);
console.log(fruit2);

// promises
let testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      firstName: "Lucy",
      lastName: "vanPelt",
    });
  }, 1000);
});

testPromise.then((response) => {
  console.log("hereis the reponse after  1s: ");
  console.log(response);
});
console.log("this is asynch after the code for promise");

// api fetch (promises)

let userPromise = fetch("https://randomuser.me/api/");
console.log(userPromise);
userPromise
  .then((response) => {
    return response.json();
  })
  .then((resData) => {
    console.log(resData.results[0].name.first);
    console.log(resData.results[0].name.last);
  })
  .catch((error) => {
    console.log(error);
  });
