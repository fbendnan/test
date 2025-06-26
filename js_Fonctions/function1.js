//String Manipulation Functions:
//Reverse a String: Write a function that reverses a given string.


function reversed(str)
{
    let j = str.length - 1;
    let strRev = [];
    for(let i = 0; i < str.length; i++)
    {
        strRev[i] = str[j];
        j--;
    }
    return strRev.join('');
}

console.log(reversed("hello"));