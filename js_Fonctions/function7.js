/*Mathematical Functions:

Factorial: Write a function to calculate the factorial of a given number.*/


const factorial = function(num){
    let F = 1;
    if(num == 1 || num == 0)
        return 1;

    for(let i = 2 ; i <= num ; i++)
    {
        F = F * i;
    }
    return F;
}

console.log(factorial(4));