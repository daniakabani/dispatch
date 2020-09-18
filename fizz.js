const fizz = () => {
  let start = 1;
  const end = 100;
  for (start; start <= end; start++) {
    //basic variables
    let result = "";
    let startString = start + "";
    // helpers variables
    const hasThree = startString.indexOf('3') > -1;
    const divisibleByThree = start % 3 === 0;
    const hasFive = startString.indexOf('5') > -1;
    const divisibleByFive = start % 5 === 0;
    const hasSeven = startString.indexOf('7') > -1;
    const divisibleBySeven = start % 7 ===0;
    // logic flow
    if (divisibleByThree || hasThree) {
      if(hasThree && divisibleByThree) {
        result += "Fizz "
      }
      if (start % 11 === 0) {
        result += "Fizz "
      }
      result += "Fizz ";
    }
    if (divisibleByFive || hasFive) {
      if(hasFive && divisibleByFive) {
        result += "Buzz "
      }
      if (start % 11 === 0) {
        result += "Buzz "
      }
      result += "Buzz "
    }
    if (divisibleBySeven || hasSeven) {
      if (start % 11 === 0 && divisibleBySeven) {
        result += "Woof "
      }
      if(start % 11 === 0) {
        result += "Woof "
      }
      result += "Woof "
    }
    if (result === ""){
      result = start;
    }
    console.log(result);
  }
}

fizz();