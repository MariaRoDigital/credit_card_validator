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

// An array of all the arrays above

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
// Add your functions below:

// reverse index nested in batch indexes
// iterate through digits in batchIndex, if even index, add it to temporary array
// if a number is odd, multiply by 2 and push into a temp array

// FIND INVALID AND INVALID CARDS
const validateCred = (arr) => {
  let results = [];

  // reverses the array without mutating original array and then iterates through each array in the batch and adds it to a new array
  for (let batchIndex of arr) {
    let reversedArr = batchIndex.toReversed();
    let digitCheckResult = [];

    // iterates through the digits in the each individual array inside of batch, leaves every other number alone but does add it to the array called digitCheckResult, doubles any number that isn't more than 9 when doubled and adds it to digitCheckResult, or when the number is more than 9 when doubled, it multiplies the digit by 2 and then subtracts 9 from the result, then adds it to digitCheckResult.
    for (let checkDigit = 0; checkDigit < reversedArr.length; ++checkDigit) {
      if (checkDigit === 0 || checkDigit % 2 === 0) {
        digitCheckResult.push(reversedArr[checkDigit]);
      } else if (reversedArr[checkDigit] * 2 > 9) {
        digitCheckResult.push(reversedArr[checkDigit] * 2 - 9);
      } else {
        digitCheckResult.push(reversedArr[checkDigit] * 2)
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
  return results;
}

const invalidOrValid = validateCred(batch);
console.log(invalidOrValid);


// ** FIND INVALID CARDS
const findInvalidCards = arr => {
  let invalidCards = [];

  for (let batchIndex of arr) {
    let reversedArr = batchIndex.toReversed();
    let digitCheckResult = [];

    // iterates through the digits in the each individual array inside of batch, leaves every other number alone but does add it to the array called digitCheckResult, doubles any number that isn't more than 9 when doubled and adds it to digitCheckResult, or when the number is more than 9 when doubled, it multiplies the digit by 2 and then subtracts 9 from the result, then adds it to digitCheckResult.
    for (let checkDigit = 0; checkDigit < reversedArr.length; ++checkDigit) {
      if (checkDigit === 0 || checkDigit % 2 === 0) {
        digitCheckResult.push(reversedArr[checkDigit]);
      } else if (reversedArr[checkDigit] * 2 > 9) {
        digitCheckResult.push(reversedArr[checkDigit] * 2 - 9);
      } else {
        digitCheckResult.push(reversedArr[checkDigit] * 2)
      };
    }

    // creates a variable with the sum of the the digit results
    let digitsSum = digitCheckResult.reduce((acc, currentValue) => acc + currentValue);

    // checks to see if the sum of the digit results is valid or invalid 
    if (digitsSum % 10 !== 0) {
      invalidCards.push(batchIndex);
    }
  }
  return invalidCards;
}

const invalidCards = findInvalidCards(batch);
// console.log(invalidCards)


// IDENTIFY INVALID CARD ISSUING COMPANIES
const idInvalidCardCompanies = arr => {
  let companies = [];

  for (let batchIndex of arr) {
    if (batchIndex.includes(3)) {
      companies.push('Amex');
    } else if (batchIndex.includes(4)) {
      companies.push('Visa');
    } else if (batchIndex.includes(5)) {
      companies.push('Mastercard');
    } else if (batchIndex.includes(6)) {
      companies.push('Discover');
    } else {
      return 'Company not found';
    }
  }

  // filters out any duplicate items
  const filteredCompanies = companies.filter((item, index) => companies.indexOf(item) === index)
  console.log(filteredCompanies);
}

idInvalidCardCompanies(invalidCards);
