/*

A2-1) Write a typescript program which contains one function named as Maximum. 
      That function accepts array of numbers and returns the largest number from array.

input :  23  89  6  29  56  45  77  32
output : Maximum is 89

*/



function Maximum(Arr : number[]) : number
{

    var Max = Arr[0]
    var Cnt : number = 0;


    for( Cnt = 1; Cnt < Arr.length; Cnt++)
    {
        if(Arr[Cnt] > Max)
        {
            Max = Arr[Cnt]
        }
    }

    return Max

}


var Values : number[] = [23,89,6,29,56,45,77,32]


var Ret = Maximum(Values);

console.log("Maximum is : "+Ret)
