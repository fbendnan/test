/*Prime Number Check: Create a function to check if a number is prime or not.*/


const IsPrime = function(num){

    if(num == 1 )
        return true;
    for(let i = 2; i < num ; i++)
    {
        if(num % i == 0)
            return false;
    }
    return true;
}


console.log(IsPrime(3));