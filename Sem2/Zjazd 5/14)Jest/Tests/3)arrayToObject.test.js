const arrayToObject = require("../Utilities/3)arrayToObject");

test("Creating object with one field", () => {
  expect(arrayToObject(["zero", 0])).toEqual({ zero: 0 });
});

test("Creating object with three fields", () => {
  expect(arrayToObject(["zero", 0], ["one", 1], ["two", 2])).toEqual({
    zero: 0,
    one: 1,
    two: 2
  });
});

test("Truthy if empty array", () => {
  expect(arrayToObject()).toBeTruthy();
});

test("Duplicates not overwriten", () => {
  expect(arrayToObject(["zero", 0], ["one", 1], ["one", 2])).toEqual({
    zero: 0,
    one: 1
  });
});


// FUN FUN FUN
// let fnTest = () => 1;
// test("Creating object with one field", () => {
//   expect({
//     x: 1,
//     fn: () => 1 + 1
//   }).toEqual({
//     x: 1,
//     fn: () => 2
//   });
// });
