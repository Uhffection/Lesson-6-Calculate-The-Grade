// Implement a function called calculateGrade that takes the number score a student got as a parameter and RETURNS the letter grade that the student should get.  
//
// Rules:
// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// Anything negative --> 'F'
//
// Example: calculateGrade(75) returns 'C'.

export function calculateGrade(score) {
  // TODO - fill in function

  if (score <= 100 && score >= 90) {

    return 'A';

  }

  if (score <= 89 && score >= 80) {

    return 'B';

  }

  if (score <= 79 && score >= 70) {

    return 'C';

  }

  if (score <= 69 && score >= 60) {

    return 'D';

  }

  if (score <= 59 && score >= 0) {

    return 'F';

  }

  if (score < 0) {

    return 'F';

  }

}

// BONUS: Once you finish this function, check out 
// calculateFinalGrade.js for an added challenge that builds
// on the function you just wrote.
