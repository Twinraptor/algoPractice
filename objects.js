let user = {
  firstName: "Jim",
  lastName: "Davis",
  setPassword: (user, password) => {
    user.password = password;
  },
  getFullName: (user) => {
    console.log(`${user.firstName} ${user.lastName}`);
  },
};

console.log(user);
