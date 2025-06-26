//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

const Fibonacci = function(num)
{
    let Fib = [0,1];
    if(num == 0)
        return 0;
    if( num == 1)
        return 1;

    for(let i = 2; i <= num; i++)
    {
       Fib[i] = Fib[i-1]+Fib[i-2];
       
    }
    return Fib;
}

console.log(Fibonacci(4));