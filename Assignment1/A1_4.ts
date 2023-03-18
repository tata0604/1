/*

A1-4) Write a typescript program which contains one function named as ChiPrime. 
      That function shouldaccept one number and it should return true if the given 
      number is prime and otherwise return false.

input : 11
output : 11 is prime number

*/

function DisplayFactors(No1 : number) 
{
    var B : number = 0

    for(let i = 2; i < No1/2; i++)
    {
        if(No1 % i == 0)
        {
            B++
        }
    
    }

    if(B == 0)
    {
        console.log("It is prime number")
    }
    else
    {
        console.log("It is not prime number")

    }
}

var A : number = 39

DisplayFactors(A)
