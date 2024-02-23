export function isPrimeNumber(n) {
  for (var i = 2; i < n; i++) {
    // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
    if (n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
  }
  return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
}

// console.log(isPrimeNumber(27));

// Returns the prime factors of a composite number
export function primeFactorization(compositeNumber) {
  let factors = [];
  let remainder = compositeNumber;
  for (let i = 2; i < compositeNumber; i++) {
    if (compositeNumber % 2 === 0) {
      factors.push(2);
      compositeNumber = compositeNumber / 2;
    } else if (compositeNumber % 3 === 0) {
      factors.push(3);
      compositeNumber = compositeNumber / 3;
    } else if (compositeNumber > 5 && compositeNumber % 5 === 0) {
      factors.push(5);
      compositeNumber = compositeNumber / 5;
    }
  }
  remainder = compositeNumber !== 1 ? compositeNumber : 0;
  factors.push(remainder);

  return factors;
}

const number = primeFactorization(27);
// console.log(number)

// Returns all the factors that make up a composite number
// Takes an array of prime factors

export function factorFinder(primeFactors) {
  let factors = [1];
  let total = primeFactors[0];
  let rest = 1;
  factors.push(total);
  if (primeFactors.length < 2) {
    for (let i = 1; i < primeFactors.length; i++) {
      total *= primeFactors[i];
      factors.push(total);
    }
  } else {
    for (let i = 1; i < primeFactors.length; i++) {
      total *= primeFactors[i];
      factors.push(total);
    }
    for (let i = primeFactors.length - 1; i > 0; i--) {
      rest *= primeFactors[i];
      factors.push(rest);
    }
  }

  factors.sort(function (a, b) {
    return a - b;
  });

  // Making sure there are no strings, else convert to numbers
  let stringToInt = [];
  for (let i = 0; i < factors.length; i++) {
    if (typeof factors[i] === "string") {
      stringToInt.push(parseInt(factors[i]));
    } else {
      stringToInt.push(factors[i]);
    }
  }

  factors = stringToInt;

  return factors;
}

export function removeDuplicates(factors) {
  return factors
    .filter((item, index) => factors.indexOf(item) === index)
    .filter((item) => item !== 0);
}

// console.log(removeDuplicates(factorFinder(number)))

//////////////////////////////////////////////////////////
///////////////// DOT ORGANIZER FUNCTION /////////////////
//////////////////////////////////////////////////////////

export function dotOrganizer(num) {
  let numOfDots = num;
  let remainder = 0;
  let dots = [];
  let rows = [];
  let primeFactors = [7, 5, 3, 2];
  let dot = ".";
  let newLine = "\n";

  for (let i = 0; i < numOfDots; i++) {
    if (numOfDots === 5) {
      rows.push(1, 3, 1);
      break;
    }
    if (numOfDots > 11) {
      remainder = numOfDots - 7;
      numOfDots -= remainder;
      rows.push(numOfDots);
      numOfDots = remainder;
    }
    if (numOfDots > 7) {
      remainder = numOfDots - 5;
      numOfDots -= remainder;
      rows.push(numOfDots);
      numOfDots = remainder;
    }
    if (numOfDots > 5) {
      remainder = numOfDots - 3;
      numOfDots -= remainder;
      rows.push(numOfDots);
      numOfDots = remainder;
    }
    if (numOfDots > 3) {
      remainder = numOfDots - 3;
      numOfDots -= remainder;
      rows.push(numOfDots);
      numOfDots = remainder;
    }
    if (numOfDots > 2) {
      remainder = numOfDots - 2;
      numOfDots -= remainder;
      rows.push(numOfDots);
      numOfDots = remainder;
    }
    
    /////////////////////////////////
    // Clean up this functionality //
    
    if (numOfDots === 2) {
      remainder = numOfDots - 2;
      numOfDots -= remainder;
      rows.push(numOfDots);
      numOfDots = remainder;
    }
    if (numOfDots === 1) {
      remainder = numOfDots - 1;
      numOfDots -= remainder;
      rows.push(numOfDots);
      numOfDots = remainder;
    }

    /////////////////////////////////

  }
  rows.push(remainder);
  rows.sort();

  // console.log(rows);

  /*
      newRow and oldRow go through a loop that will push/unshift
      the factors in the "rows" array.

      The goal is to create a bell curve shape that places the smallest numbers
      at the ends and the largest ones at the center
  */

  let newRow = [];
  let oldRow = [];
  for (let i = 0; i < rows.length; i += 2) {
    newRow.push(rows[i]);
    oldRow.unshift(rows[i + 1]);
  }

  /*
      For an array with the following numbers: [1,2,2,3,3,3,5,5],
      the loop above will return two arrays: newRow = [1,2,3,5] and oldRow = [5,3,3,2] 
  */

  /* 
      finalRow concatenates the newRow and oldRow arrays
  */
  let finalRow = newRow.concat(oldRow);
  // removes undefined values from finalRow
  // finalRow = finalRow.filter((element) => element !== undefined)
  finalRow = finalRow.filter((element) => !!element)
  // console.log(finalRow);

  /*
      dots is an array that is created by mapping through the finalRow
      and it uses the .repeat() method to multiply a "dot" string
      by each number in the finalRow array
  */
  dots = finalRow.map((row) => {
    return dot.repeat(row);
  });
  // console.log(dots);

  /*
    Since the "dots" array displays the "dot" string in an array, organizedDots
    uses the join() method to create a giant string using "\n" as a means
    to joining all of the dots together. Thus, creating an organized image of dots.
  */
  // let organizedDots = dots.join(newLine);

  // return organizedDots;
  return finalRow;
}

