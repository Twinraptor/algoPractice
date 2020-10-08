// let user = {
//   firstName: "Jim",
//   lastName: "Davis",
//   setPassword: (user, password) => {
//     user.password = password;
//   },
//   getFullName: (user) => {
//     return `${user.firstName} ${user.lastName}`;
//   },
//   "user Hobbies": ["soccer", "volleyball"],
// };

// console.log(user);
// console.log(user.getFullName(user));
// console.log(user.firstName);
// console.log(user["lastName"]);
// console.log(user["user Hobbies"]);

// if ("firstName" in user) {
//   console.log("first name exists");
// }

// if ("highfive" in user) {
//   console.log("High five exists");
// } else {
//   console.log("high five is not there");
// }

// for (let prop in user) {
//   console.log(user[prop]);
// }

//classes
class User {
  constructor(firstName, lastName, userHobbies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userHobbies = userHobbies;
  }
  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

let user1 = new User("Mark", "Davis", ["tennis"]);
console.log(user1.getFullName());

class Admin extends User {
  setPassword = (password) => {
    this.password = password;
  };
}

let user2 = new Admin("Tom", "Dick", ["Dancing"]);
user2.setPassword("codes");
console.log(user2);
