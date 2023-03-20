/*

A1-5. Write a typescript program which contains one function named as Fibonacci That function accept
      one number from user and print Fibonacci series till that number.

input : 21
output :   1  1  2  3  5  8  13  21

*/

function Fibonacci(No1 : number) 
{
    var prev : number = 0
    var Ans : number = 0

    while(Ans <= No1)
    {
        Ans = Ans + prev

        console.log(Ans)

        prev = Ans - prev
    }


}

var Value : number = 21

Fibonacci(Value)