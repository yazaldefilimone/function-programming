let PI = 3.14;

// impure function
const calcAreaImpure = (radius) => radius * radius * PI;
//  PI = 26.14;

// Exemple 1

const areaImpure = calcAreaImpure(10);
console.log("impure function: ", areaImpure);

const calcAreaPure = (radius, pi) => radius * radius * pi;

const areaPure = calcAreaPure(10, PI);
console.log("impure function: ", areaPure);

// Red External File

const charactersCounter = (text) => `Character count: ${text.length}`;

// Exemple 2

function analyzeFile(filename) {
  // Impure Function
  let fileContent = open(filename);
  return charactersCounter(fileContent);
}

// Exemple 3

function yearEndEvaluation() {
  // Impure Function
  if (Math.random() > 0.5) {
    return "You get a raise!";
  } else {
    return "Better luck next year!";
  }
}

// Exemple 4
let counter = 1;

function increaseCounter(value) {
  // Impure Function
  counter = value + 1;
}

increaseCounter(counter);
console.log(counter); // 2

counter = 1;

const increaseCounterTwo = (value) => value + 1; // Pure Function

increaseCounterTwo(counter); // 2
console.log(counter); // 1
