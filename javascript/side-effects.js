class GreenLin {
  constructor(power){
    this.power = power;
  }

  kill(greenLin){
    const result = this.power + greenLin.power;
    return new GreenLin(result)
  }

  eat(greenLin){
    const result = this.power * greenLin.power;
    return new GreenLin(result)
  }
}

let small = new GreenLin(0);
let mid = new GreenLin(2);
let big = new GreenLin(4);


let result = big.
  kill(small)
  .eat(mid)
  .kill(big.eat(mid)).power;


console.log(`Object Programming: ${result}`);
// Function Programming

const kill = (GreenLinOne, GreenLinTwo) => GreenLinOne + GreenLinTwo;
const eat = (GreenLinOne, GreenLinTwo) => GreenLinOne * GreenLinTwo;


small = 0;
mid = 2;
big = 4;

result = kill(eat(kill(big, small), mid), eat(big, mid));


console.log(`Function Programming: ${result}`);


