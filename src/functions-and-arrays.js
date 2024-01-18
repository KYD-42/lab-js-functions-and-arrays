// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else{
      return num2;
    }
}
      
let result = maxOfTwoNumbers(5, 10);
    
// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    
    if (words.length === 0) {
      return 0;
    }

    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
          return 0;
      }
    
      let sum = sumNumbers(numbers2);
      let average = sum / numbers2.length;
    
      return average;
    }
    

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToSearch) {

  if (words.length === 0) {
    return null;
  }
  
  for (let i = 0; i < words.length; i++) { // "Goes" -> through the array -> to check if the 'wordToSearch' exists in it;
    if (words[i] === wordToSearch) {
      return true;
    }
  }

  return false;

}