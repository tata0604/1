/*

1. Create one typescript application which contains one class named as Arithmetic. 
    Arithmetic class contains three characteristics (Class, data, members) as Number1, Number2. 
    Create one parametrised constructor which accept two values and assign it to Number1 and
    Number2.In Anthmetic class we have to write four methods (Behaviours) as Addition, Subtraction,
    Multiplication and Division. Addition method will add Number1, Number2 & return result.
    Subtraction method will subtract Number1, Number2 & return result.
    Multiplication method will multiply Number1, Number2 & return result.
    Division method will divide Number1, Number2 & return result.
    After designing the class create two objects of that class by providing some hardcoded value.
    Call all the methods by using both the objects.

*/


class Arithmatic
{
    Number1 : number;
    Number2 : number;
    Number3 : number;

    constructor(A : number, B : number)
    {
        this.Number1 = A;
        this.Number2 = B;
    }

    Addition() : number
    {
        return this.Number1 + this.Number2;
    }

    Substraction() : number
    {
        return this.Number1 - this.Number2;    
    }

    Multiplication() : number
    {
        return this.Number1 * this.Number2;
    }

    Division() : number
    {
        return this.Number1 / this.Number2;        
    }

}

var obj1 = new Arithmatic(15,10);
var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition is : "+Ret);

Ret = obj1.Substraction();
console.log("Substraction is : "+Ret);

Ret = obj1.Multiplication();
console.log("Multiplication is : "+Ret);

Ret = obj1.Division();
console.log("Division is : "+Ret);

console.log();

var obj2 = new Arithmatic(20,10);
var Ret : number = 0;

Ret = obj2.Addition();
console.log("Addition is : "+Ret);

Ret = obj2.Substraction();
console.log("Substraction is : "+Ret);

Ret = obj2.Multiplication();
console.log("Multiplication is : "+Ret);

Ret = obj2.Division();
console.log("Division is : "+Ret);
