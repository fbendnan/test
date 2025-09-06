"use strict";
// Create a function sumGrades that takes an array of numbers and returns their total.
Object.defineProperty(exports, "__esModule", { value: true });
// Optional: create a function greetStudent that optionally takes greeting: string and prints it with a name
function createUser(name, age) {
    return {
        N: name,
        A: age,
    };
}
function sumGrades(grades) {
    let sum = 0;
    grades.forEach(element => {
        sum += element;
    });
    return sum;
}
console.log(sumGrades([1, 2, 2]));
function greeting(name, greet) {
    return ((greet || "hello") + ", " + name);
}
console.log(greeting("fatii", "hi"));
