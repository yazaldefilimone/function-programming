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


const small = new GreenLin(0);
const mid = new GreenLin(2);
const big = new GreenLin(4);


const result = big.
  kill(small)
  .eat(mid)
  .kill(big.eat(mid));


console.log(result);

