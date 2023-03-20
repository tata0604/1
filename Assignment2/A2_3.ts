// Return Second Largest Number from Array.



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

console.log("MAximum is : "+Ret)