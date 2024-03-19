// Task 1

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

console.log(massMark, heightMark, massJohn, heightJohn);

// Task 2
// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

const BMIMArk = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Task 3
// Log the value of BMIMark and BMIJohn to the console.
console.log(BMIMArk, BMIJohn);

// Task 3
// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too
markHigherBmi = BMIMArk > BMIJohn;
console.log(markHigherBmi);
// if (BMIMArk > BMIJohn) {
// 	console.log(`Mark bmi is higher ${markHigherBMI}`);
// }

console.log(`Mark's BMI is higher than John's`);
console.log(`John's BMI is higher than Mark's`);
console.log(`Mark's BMI ${BMIMArk} is higher than John's BMI ${BMIJohn}`);
console.log(`John's BMI ${BMIJohn} is higher than  Mark's BMI ${BMIMArk}`);

/*CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.
*/
