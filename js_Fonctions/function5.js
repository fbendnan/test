//Sum of Array: Create a function that calculates the sum of all elements in an array.


const SumOfArr = function(arr)
{
    let sum = 0;

    for (let i = 0; i < arr.length ; i++)
    {
        sum += arr[i];
    }
    return sum;
}

console.log(SumOfArr([1,2,3,4,5]));