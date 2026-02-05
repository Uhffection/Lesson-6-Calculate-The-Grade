// This file is needed to run the tests correctly. Please do not modify it. 
// The exercise is in calculateGrade.js

import { calculateGrade } from './calculateGrade.js';
import { calculateFinalGrade } from './calculateFinalGrade.js';

process.stdin.on('data', input => {
  try {
    console.log(calculateGrade(Number(input.toString())))
  } catch (e) {
    console.log(e.toString())
  }
  process.exit();
});

