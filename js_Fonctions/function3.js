//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.


/*function ToUpper(str)
{
    let str1 = '';

    for(let i = 0; i < str.length; i++)
    {
        if(i == 0 ||str[i-1] == ' ')
        {
            str1 += str[i].toUpperCase();
        }
        else
            str1 += str[i];
    }
    return str1;
}*/


const ToUpper = function(str)
{
    let str1;
    let CapitalizeNext = true;
    for(let i = 0; i < str.length;i++)
    {
        if(CapitalizeNext && str[i] != ' ')
        {
            str1 += str[i].toUpperCase()
            CapitalizeNext = false;
        }
        else 
            str1 += str[i];
        if(str[i] == ' ') 
        { 
            CapitalizeNext = true; 
        }   
    }
    return str1;
}

console.log(ToUpper("hello me"));