import animals from "./animals.js";
import students from "./students.js";
import {   isEven,  capitalize, calculatePercentage} from "./utilities.js";

animals.forEach((animal) => console.log(animal));
students.forEach((student) =>{
    console.log(`${student.name}: ${student.marks} marks`)
} );

console.log(`24 is even: ${isEven(24)}`);
console.log(`Capitalized react: ${capitalize("react")}`);
console.log(`Percentage for 420/500: ${calculatePercentage(420,500)}`);