/*
A2-2). Write a typescript program which contains one function named as Summation. 
       That function accepts array of numbers and returns the summation of each number from array.

input : 23  6  7  4  5  7

output :  Addition is 52

*/

function Addition(Arr : number[]) : number
{

    var Sum : number = 0;
    var Cnt : number = 0;


    for( Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        Sum = Sum + Arr[Cnt]
    }

    return Sum

}


var Values : number[] = [23,6,7,4,5,7]


var Ret = Addition(Values);

console.log("Addition is : "+Ret)