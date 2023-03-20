// ChkAmstrong number or not

// Input : 153
//Output :  1*1*1 + 5*5*5 + 3*3*3


function ChkAmstrong(No1 : number)
{
    var rem : number = 0
    var Cnt : number = 0
    let temp = No1
    var Sum : number = 0

    while(temp > 0)
    {
        rem = Math.floor(temp % 10);

        temp = Math.floor(temp/10);

        Sum = Sum + (rem* rem * rem);
    }


    if(Sum == No1)
    {
        console.log("It is armstrong number")
    }
    else
    {
        console.log("It is not armstrong number")       
    }

}


var Value : number = 153

ChkAmstrong(Value)