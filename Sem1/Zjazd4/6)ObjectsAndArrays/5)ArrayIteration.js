// 1

let people = [
  {
    innerId: "dfr458hj",
    name: "Karol Rogowski",
    birthYear: 1985,
    sayHello: function () {
      console.log(this.name + " says hello");
    },
  },
  {
    innerId: "plo745as",
    name: "Jan Kowalski",
    birthYear: 1980,
    sayHello: function () {
      console.log(this.name + " says hello");
    },
  },
  {
    innerId: "qaz390pl",
    name: "Robert Lewandowski",
    birthYear: 1988,
    sayHello: function () {
      console.log(this.name + " says hello");
    },
  },
];

// people.forEach((p) => console.log(p));
// people.forEach((p, i) => console.log(i + ":" + p.name));
// people.forEach((p) => p.sayHello());

// people.forEach((p) => (p.name = p.name + "123"));
// people.forEach((p) => console.log(p.name));

// let result = people.map((p, i) => i + ":" + p.name);
// console.log(result);

// console.log(people.filter((p) => p.birthYear > 1980)); // does it change
// console.log(people.filter((p) => false));
// console.log(people.every((p) => p.birthYear > 1980));
// console.log(people.every((p) => p.birthYear >= 1980));
// console.log(people.some((p) => p.birthYear >= 1980));
// console.log(people.find((p) => p.birthYear != 1985));
// console.log(people.find((p) => false));

// let value = [1, 2, 1, 1, 1, 1, 1, 1];
// let result = value.map((v, i) => {
//   return { value: v, index: i + 1 };
// });
// console.log(result);

// people
//   .filter((p) => p.birthYear > 1980)
//   .map((p, i) => i + ":" + p.name)
//   .forEach((p) => console.log(p));

// //2
// function Person(firstName, lastName, id) {
//   this.id = id;
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// let result = people.map(
//   (p, i) => new Person(p.name.split(" ")[0], p.name.split(" ")[1], i)
// );

// console.log(result);
