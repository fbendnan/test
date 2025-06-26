//Array Functions:
//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

const MaxMin = function(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] < min)
            min = arr[i];
        if(arr[i] > max)
            max = arr[i];
    }
    return [min, max];
}

console.log(MaxMin([1,2,7,2,10,44,1]));