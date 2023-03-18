/*
1. Write a typescript program which contains one function named as Maximum. 
   That function accepts three parameters and it should returns largest value 
   from three input parameters.

input : 23  89  6

output : Maximum is 89

*/

function Maximum(No1 : number, No2 : number, No3 : number) : void
{
    if(No1 > No2 && No1 > No3)
    {
        console.log("Largest number is : "+No1)
    }
    else if(No2 > No1 && No2 > No3)
    {
        console.log("Largest number is : "+No2)
    }
    else
    {
        console.log("Largest number is : "+No3)
    }

}

var A : number = 23
var B : number = 89
var C : number = 6

Maximum(A,B,C)