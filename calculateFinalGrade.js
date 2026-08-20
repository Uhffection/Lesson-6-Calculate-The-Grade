// Let's say a student's final grade depends on the average of two scores. Create a function called calculateFinalGrade that takes two number scores as parameters and returns the final letter grade.  Hint: can you re-use your solution to Exercise 1 in this new function?
//
// Example: calculateFinalGrade(50, 100) returns 'C'

import { calculateGrade } from './calculateGrade.js';

export function calculateFinalGrade(score1, score2) {
  // TODO - fill in function

  return ((score1 + score2) / 2);

}

var finalGrade = calculateFinalGrade(98, 100);

console.log(calculateGrade(finalGrade));
