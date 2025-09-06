
// Create a function sumGrades that takes an array of numbers and returns their total.

// Optional: create a function greetStudent that optionally takes greeting: string and prints it with a name

function createUser(name: string, age: number): { N: string; A: number } {
  return {
    N: name,
    A: age,
  };
}

function sumGrades(grades:number[]):number {
    let sum = 0;
    grades.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sumGrades([1,2,2]));


function greeting(name:string, greet? :string):string{
    return((greet|| "hello") + ", " + name);
}

console.log(greeting("fatii", "hi"));