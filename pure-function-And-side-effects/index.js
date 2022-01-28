class GreenLin {
  constructor(power){
    this.power = power;
  }

  kill(greenLin){
    this.power += greenLin.power;
    return this;
  }

  eat(greenLin){
    this.power *= greenLin.power;
    return this
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
