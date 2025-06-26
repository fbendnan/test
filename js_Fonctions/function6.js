//Filter Array: Implement a function that filters out elements from an array based on a given condition.


const Filter = function(arr){
    for(let i = 0; i < arr.length; i++)
    {
        if(typeof(arr[i]) !== 'number')
        {
            arr.splice(i, 1);
            i = i -1;
        }
    }
    return arr;
}

console.log(Filter([1, "hello", true, 2 , 5,90]));