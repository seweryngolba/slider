let myFirstFunction = (name = "Pedro", greeting = "Siema") => {
  console.log(greeting + " " + name + "!");
};
myFirstFunction("John", "Witaj");
myFirstFunction("Bruce", "Elo");
myFirstFunction();

let countFunction = (number = 4) => {
  console.log(number * 2);
};

countFunction(5);
countFunction(23);
countFunction(2);
countFunction();

let newFunction = (number1 = 4, number2 = 5) => {
  console.log(number1 * number2);
};

newFunction();
newFunction(2, 3);
newFunction(10, 12);
newFunction(2.3, 4.5);

let nextFunction = (number = 10) => {
  console.log(number * number);
};

nextFunction();
nextFunction(2);
nextFunction(3);
