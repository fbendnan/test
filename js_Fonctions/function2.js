//Count Characters: Create a function that counts the number of characters in a string.


function CountChar(str)
{
    let count = 0;
    for(let i = 0; i < str.length ; i++)
    {
        count++;
    }
    return count;
}

console.log(CountChar("hello world"));