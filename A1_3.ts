/*
A1-3. Write a typescript program which contains one function named as DisplayFactors. 
      That function should accept one number and display factors of that number. 

Input : 20
Output : 1  2  4  5  10

*/

function DisplayFactors(No1 : number) 
{
    for(let i = 1; i < No1; i++)
    {
        if(No1 % i == 0)
        {
            console.log(i)
        }
    }
}

var A : number = 20

DisplayFactors(A)
