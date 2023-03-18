/*
2. Write a typescript program which contains one function named as Area. 
  That function should calculate area of circle.  Accept value of radius 
  from user and return its area. Default value of P .should be 3.14 
  if it is not provided by the caller

input : 5
output : Area is 78.5
*/

function Area_of_circle(No1 : number) 
{
    var Area : number = 0
    var PI : number = 3.14

    Area = PI * No1*No1 

    return Area
}

var A : number = 5
var B : number = 0

B = Area_of_circle(A)

console.log("Area is : "+B)