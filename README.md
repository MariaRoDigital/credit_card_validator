# Challenge Project - Credit Card Checker

Provides different functions to validate a credit card number with the main foundation being the Luhn algorithm

```javascript
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

const test1 = [3, 6, 8, 8, 4, 0, 1, 9, 3, 0, 9, 7, 1, 0];
const test2 = [6, 3, 7, 8, 4, 8, 3, 0, 6, 1, 6, 5, 1, 9, 3, 0];
const test3 = [6, 0, 1, 1, 7, 6, 9, 1, 9, 7, 2, 5, 0, 8, 6, 7];
const test4 = [2, 2, 2, 1, 0, 0, 4, 6, 7, 0, 7, 5, 7, 5, 7, 5];
const test5 = [4, 5, 5, 6, 3, 7, 0, 6, 5, 0, 1, 4, 5, 4, 8, 2];

// An array of all the arrays above

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, test1, test2, test3, test4, test5]
// Add your functions below:

// reverse index nested in batch indexes
// iterate through digits in batchIndex, if even index, add it to temporary array
// if a number is odd, multiply by 2 and push into a temp array

// FIND INVALID AND INVALID CARDS
const validateCred = (arr) => {
  let results = [];

  // reverses the array without mutating original array and then iterates through each array in the batch and adds it to a new array
  for (let batchIndex of arr) {
    let revArr = batchIndex.toReversed();
    let digitCheckResult = [];

    // iterates through the digits in the each individual array inside of batch, leaves every other number alone but does add it to the array called digitCheckResult, doubles any number that isn't more than 9 when doubled and adds it to digitCheckResult, or when the number is more than 9 when doubled, it multiplies the digit by 2 and then subtracts 9 from the result, then adds it to digitCheckResult.
    for (let checkDigit = 0; checkDigit < revArr.length; ++checkDigit) {
      if (checkDigit === 0 || checkDigit % 2 === 0) {
        digitCheckResult.push(revArr[checkDigit]);
      } else if (revArr[checkDigit] * 2 > 9) {
        digitCheckResult.push(revArr[checkDigit] * 2 - 9);
      } else {
        digitCheckResult.push(revArr[checkDigit] * 2)
      };
    }

    // creates a variable with the sum of the the digit results
    let digitsSum = digitCheckResult.reduce((acc, currentValue) => acc + currentValue);

    // checks to see if the sum of the digit results is valid or invalid 
    if (digitsSum % 10 === 0) {
      results.push(true);
    } else {
      results.push(false);
    }
  }
  console.log(results);
}

// validateCred(batch);


// ** FIND INVALID CARDS
const findInvalidCards = arr => {
  let invalidCards = [];

  for (let batchIndex of arr) {
    let revArr = batchIndex.toReversed();
    let digitCheckResult = [];

    // iterates through the digits in the each individual array inside of batch, leaves every other number alone but does add it to the array called digitCheckResult, doubles any number that isn't more than 9 when doubled and adds it to digitCheckResult, or when the number is more than 9 when doubled, it multiplies the digit by 2 and then subtracts 9 from the result, then adds it to digitCheckResult.
    for (let checkDigit = 0; checkDigit < revArr.length; ++checkDigit) {
      if (checkDigit === 0 || checkDigit % 2 === 0) {
        digitCheckResult.push(revArr[checkDigit]);
      } else if (revArr[checkDigit] * 2 > 9) {
        digitCheckResult.push(revArr[checkDigit] * 2 - 9);
      } else {
        digitCheckResult.push(revArr[checkDigit] * 2)
      };
    }

    // creates a variable with the sum of the the digit results
    let digitsSum = digitCheckResult.reduce((acc, currentValue) => acc + currentValue);

    // checks to see if the sum of the digit results is valid or invalid 
    if (digitsSum % 10 !== 0) {
      invalidCards.push(batchIndex);
    }
    console.log(digitsSum)
  }
  return invalidCards;
}

// IDENTIFY INVALID CARD ISSUING COMPANIES
const idInvalidCardCompanies = arr => {
  let companies = [];

  for (let batchIndex of arr) {
    if (batchIndex[0] === 3) {
      companies.push('Amex');
    } else if (batchIndex[0] === 4) {
      companies.push('Visa');
    } else if (batchIndex[0] === 5) {
      companies.push('Mastercard');
    } else if (batchIndex[0] === 6) {
      companies.push('Discover');
    } else {
      console.log('Company not found');
    }
  }

  // filters out any duplicate items
  const filteredCompanies = companies.filter((item, index) => companies.indexOf(item) === index)
  console.log(filteredCompanies);
}

// idInvalidCardCompanies(invalidCards);


// extra challenge: tested using card numbers from a card number generator and validator site

// extra challenge: to make it easier to test credit card numbers, create a function that accepts a string and converts it into an array of numbers like the initially provided arrays.
const string = '123456789'

const stringToArray = str => {
  let convertedString = [];

  for (let i = 1; i < string.length; ++i) {
    convertedString.push(parseInt(i, 10));
  }
  return convertedString;
}

// console.log(stringToArray(string));

// extra challenge: create a function that will convert invalid numbers into valid numbers
const invalidToValid = arr => {
  let newValidCards = [];

  for (let index of arr) {
    let revArr = index.toReversed();
    let digitCheckResult = [];

    // iterates through the digits in the each individual array inside of batch, leaves every other number alone but does add it to the array called digitCheckResult, doubles any number that isn't more than 9 when doubled and adds it to digitCheckResult, or when the number is more than 9 when doubled, it multiplies the digit by 2 and then subtracts 9 from the result, then adds it to digitCheckResult.
    for (let checkDigit = 0; checkDigit < revArr.length; ++checkDigit) {
      if (checkDigit === 0 || checkDigit % 2 === 0) {
        digitCheckResult.push(revArr[checkDigit]);
      } else if (revArr[checkDigit] * 2 > 9) {
        digitCheckResult.push((revArr[checkDigit]) * 2 - 9);
      } else if (revArr[checkDigit] * 2 <= 8) {
        digitCheckResult.push(revArr[checkDigit] * 2)
      }
    }

    // creates a variable with the sum of the digit results
    let digitsSum = digitCheckResult.reduce((acc, currentValue) => acc + currentValue);

    // looks at the sum of digitsSum divided by 10, looks at the remainder and then uses the remainder result to check the number (51, 52, 53 and so on) to change one of the digits into a value that will give the sum a valid number depending if the number is available to change

    // replace sum when sum has a remainder of 1
    if (digitsSum % 10 === 1) {
      if (revArr.indexOf(5) && revArr.indexOf(5) !== revArr[0]) {
        revArr.splice(revArr.indexOf(5), 1, 0) // subtracts 1
      } else if (revArr.indexOf(0) && revArr.indexOf(0) !== revArr[0]) {
        revArr.splice(revArr.indexOf(0), 1, 9) // adds 9
      } else {
        revArr.splice(revArr.indexOf(1), 1, 4) // makes a 2 into 8
        revArr.splice(revArr.indexOf(0), 1, 1) // make a 0 into 2
      }

      // replace sum when sum has a remainder of 2
    } else if (digitsSum % 10 === 2) {
      if (revArr.indexOf(1) && revArr.indexOf(1) !== revArr[0]) {
        revArr.splice(revArr.indexOf(1), 1, 0) // make 2 into 0
      } else if (revArr.indexOf(2) && revArr.indexOf(2) !== revArr[0]) {
        revArr.splice(revArr.indexOf(2), 1, 1) // make 4 into 2
      } else {
        revArr.splice(revArr.indexOf(0), 1, 4) // make 0 into 8
      }

      // replace sum when sum has a remainder of 3
    } else if (digitsSum % 10 === 3) {
      if (revArr.indexOf(6) && revArr.indexOf(6) !== revArr[0]) {
        revArr.splice(revArr.indexOf(6), 1, 0) // subtract 0
      } else if (revArr.indexOf(3) && revArr.indexOf(3) !== revArr[0]) {
        revArr.splice(revArr.indexOf(3), 1, 6) // subtract 3
      } else if (revArr.indexOf(9) && revArr.indexOf(9) !== revArr[0]) {
        revArr.splice(revArr.indexOf(9), 1, 3) // subtract 3
      }

      // replace sum when sum has a remainder of 4
    } else if (digitsSum % 10 === 4) {
      if (revArr.indexOf(2) && revArr.indexOf(2) !== revArr[0]) {
        revArr.splice(revArr.indexOf(2), 1, 0) // changes 2 to 8
      } else if (revArr.indexOf(4) && revArr.indexOf(4) !== revArr[0]) {
        revArr.splice(revArr.indexOf(4), 1, 2) // changes 5 to 1
      } else if (revArr.indexOf(3) && revArr.indexOf(3) !== revArr[0]) {
        revArr.splice(revArr.indexOf(3), 1, 1) // changes 8 to 4
      } 

      // replace sum when sum has a remainder of 5
    } else if (digitsSum % 10 === 5) {
      if (revArr.indexOf(2) && revArr.indexOf(2) !== revArr[0]) {
        revArr.splice(revArr.indexOf(2), 1, 7) //
      } else if (revArr.indexOf(7) && revArr.indexOf(7) !== revArr[0]) {
        revArr.splice(revArr.indexOf(7), 1, 2)
      } else if (revArr.indexOf(1) && revArr.indexOf(1) !== revArr[0]) {
        revArr.splice(revArr.indexOf(1), 1, 6)
      } else if (revArr.indexOf(9) && revArr.indexOf(9) !== revArr[0]) {
        revArr.splice(revArr.indexOf(9), 1, 4)
      }

      // replace sum when sum has a remainder of 6
    } else if (digitsSum % 10 === 6) {
      if (revArr.indexOf(2) && revArr.indexOf(2) !== revArr[0]) {
        revArr.splice(revArr.indexOf(2), 1, 6)
      } else if (revArr.indexOf(6) && revArr.indexOf(6) !== revArr[0]) {
        revArr.splice(revArr.indexOf(6), 1, 0)
      }

      // replace sum when sum has a remainder of 7
    } else if (digitsSum % 10 === 7) {
      if (revArr.indexOf(0) && revArr.indexOf(0) !== revArr[0]) {
        revArr.splice(revArr.indexOf(6), 1, 6)
      } else if (revArr.indexOf(5) && revArr.indexOf(5) !== revArr[0]) {
        revArr.splice(revArr.indexOf(5), 1, 2)
      } else if (revArr.indexOf(2) && revArr.indexOf(2) !== revArr[0]) {
        revArr.splice(revArr.indexOf(2), 1, 8)
      }

      // replace sum when sum has a remainder of 8
    } else if (digitsSum % 10 === 8) {
      if (revArr.indexOf(4) && revArr.indexOf(4) !== revArr[0]) {
        revArr.splice(revArr.indexOf(4), 1, 3) // changes a 0 into a 2
      } else if (revArr.indexOf(1) && revArr.indexOf(1) !== revArr[0]) {
        revArr.splice(revArr.indexOf(1), 1, 2) // changes a 2 into a 4
      } else if (revArr.indexOf(2) && revArr.indexOf(2) !== revArr[0]) {
        revArr.splice(revArr.indexOf(2), 1, 3) // changes a 4 into a 6
      } else if (revArr.indexOf(6) && revArr.indexOf(6) !== revArr[0]) {
        revArr.splice(revArr.indexOf(6), 1, 7)
      }

      // replace sum when sum has a remainder of 9
    } else if (digitsSum % 10 === 9) {
      if (revArr.indexOf(0) && revArr.indexOf(0) !== revArr[0]) {
        revArr.splice(revArr.indexOf(0), 1, 9)
      } else if (revArr.indexOf(9) && revArr.indexOf(9) !== revArr[0]) {
        revArr.splice(revArr.indexOf(9), 1, 0)
      }
    }
    newValidCards.push(revArr.toReversed())
  };
  return newValidCards
}

const invalidCards = findInvalidCards(batch);
// console.log(invalidCards);
console.log(invalidToValid(invalidCards));
console.log(findInvalidCards(invalidToValid(batch)));
```