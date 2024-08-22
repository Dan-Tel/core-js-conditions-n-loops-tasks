/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const deltaX = Math.abs(queen.x - king.x);
  const deltaY = Math.abs(queen.y - king.y);

  if (deltaX === deltaY || deltaX === 0 || deltaY === 0) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }

  if (a > b + c || b > a + c || c > a + b) {
    return false;
  }

  if (a === b || a === c || b === c) {
    return true;
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let arabic = num;
  let roman = '';
  while (arabic >= 10) {
    roman += 'X';
    arabic -= 10;
  }

  if (arabic === 9) {
    roman += 'IX';
    arabic = 0;
  }

  if (arabic === 4) {
    roman += 'IV';
    arabic = 0;
  }

  if (arabic >= 5) {
    roman += 'V';
    arabic -= 5;
  }

  while (arabic > 0) {
    roman += 'I';
    arabic -= 1;
  }

  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let digitStr = '';
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        digitStr += 'minus';
        break;
      case '.':
        digitStr += 'point';
        break;
      case ',':
        digitStr += 'point';
        break;
      default:
        digitStr += digits[+numberStr[i]];
    }

    if (i < numberStr.length - 1) {
      digitStr += ' ';
    }
  }

  return digitStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i <= j; i += 1, j -= 1) {
    if (str[i] !== str[j]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let temp = num;

  while (temp > 0) {
    if (temp % 10 === digit) {
      return true;
    }
    temp = Math.floor(temp / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const prefSum = new Array(arr.length);
  const suffSum = new Array(arr.length);
  for (
    let i = 0, j = arr.length - 1;
    i < arr.length && j >= 0;
    i += 1, j -= 1
  ) {
    prefSum[i] = (i > 0 ? prefSum[i - 1] : 0) + arr[i];
    suffSum[j] = (j < arr.length - 1 ? suffSum[j + 1] : 0) + arr[j];
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (prefSum[i] === suffSum[i]) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  function fillMatrixLine(num, y, x, direction) {
    let currNum = num;

    if (direction === 'right') {
      let j = x;
      for (j; j < size && !matrix[y][j]; j += 1) {
        currNum += 1;

        matrix[y][j] = currNum;
      }
      j -= 1;

      if (y < size - 1 && !matrix[y + 1][j]) {
        fillMatrixLine(currNum, y + 1, j, 'down');
      }
    } else if (direction === 'down') {
      let i = y;
      for (i; i < size && !matrix[i][x]; i += 1) {
        currNum += 1;

        matrix[i][x] = currNum;
      }

      i -= 1;

      if (x > 0 && !matrix[i][x - 1]) {
        fillMatrixLine(currNum, i, x - 1, 'left');
      }
    } else if (direction === 'left') {
      let j = x;
      for (j; j >= 0 && !matrix[y][j]; j -= 1) {
        currNum += 1;

        matrix[y][j] = currNum;
      }
      j += 1;

      if (y > 0 && !matrix[y - 1][j]) {
        fillMatrixLine(currNum, y - 1, j, 'up');
      }
    } else if (direction === 'up') {
      let i = y;
      for (i; i >= 0 && !matrix[i][x]; i -= 1) {
        currNum += 1;

        matrix[i][x] = currNum;
      }

      i += 1;

      if (x < size - 1 && !matrix[i][x + 1]) {
        fillMatrixLine(currNum, i, x + 1, 'right');
      }
    }
  }

  fillMatrixLine(0, 0, 0, 'right');

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;
  const initialMatrix = JSON.parse(JSON.stringify(matrix));
  const rotatedMatrix = matrix;

  for (let j = 0; j < size; j += 1) {
    for (let i = size - 1; i >= 0; i -= 1) {
      rotatedMatrix[j][size - 1 - i] = initialMatrix[i][j];
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function merge(arr1, arr2) {
    const mergedArr = [];

    for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
      if (i < arr1.length && (arr1[i] <= arr2[j] || j === arr2.length)) {
        mergedArr[i + j] = arr1[i];
        i += 1;
      } else if (j < arr2.length && (arr1[i] > arr2[j] || i === arr1.length)) {
        mergedArr[i + j] = arr2[j];
        j += 1;
      }
    }

    return mergedArr;
  }

  function mergeSort(arr1) {
    if (arr1.length === 1) {
      return arr1;
    }

    const mid = Math.ceil(arr1.length / 2);

    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr1.length; i += 1) {
      if (i < mid) {
        leftArr[i] = arr1[i];
      } else {
        rightArr[i - mid] = arr1[i];
      }
    }

    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);

    const sortedArr = merge(sortedLeftArr, sortedRightArr);
    return sortedArr;
  }

  const sortedArr = mergeSort(arr);
  const initialArr = arr;

  for (let i = 0; i < initialArr.length; i += 1) {
    initialArr[i] = sortedArr[i];
  }

  return sortedArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const hash = {};
  let iterationCycle = 0;

  let iter = 1;
  let shuffled = '';

  hash[0] = str;

  do {
    shuffled = `${str[0]}`;
    let len = str.length;
    if (len % 2 === 0) {
      len -= 1;
    }

    for (let i = 1; i < len; i += 1) {
      shuffled += str[(i * 2 ** iter) % len];
    }

    if (str.length % 2 === 0) {
      shuffled += str[len];
    }

    if (str !== shuffled) {
      hash[iter] = shuffled;
    }
    iter += 1;
  } while (str !== shuffled);

  iterationCycle = iter - 1;
  return hash[iterations % iterationCycle];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = number;
  let maxDigit = 0;

  while (result > 0) {
    const lastDigit = result % 10;
    digits[lastDigit] += 1;
    result = Math.floor(result / 10);

    if (lastDigit >= maxDigit) {
      maxDigit = lastDigit;
    } else {
      for (let i = lastDigit + 1; i <= 9; i += 1) {
        if (digits[i] > 0) {
          result *= 10;
          result += i;
          digits[i] -= 1;
          break;
        }
      }

      for (let i = 0; i <= 9; i += 1) {
        for (let j = 0; j < digits[i]; j += 1) {
          result *= 10;
          result += i;
        }
      }

      break;
    }
  }

  if (result) return result;
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
