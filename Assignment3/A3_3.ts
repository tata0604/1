/*
3.  Create one typescript application which contains one class named as Circlex 
    which s inherits above Circle class, In Circlex class we have to write ene method (Behaviours) 
    as Circumference which will return circumference of circle.
    After designing the class create two objects of that class by providing some hardcoded value
    Call Circumference and Area methods by using both the objects
*/


class Circle
{
    Radius : number;
    PI : number;

    constructor(Data : number)
    {
        this.Radius = Data;
        this.PI = 3.14; 
    }

    CalculateArea() : number
    {
        let Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    }

}

class CircleX extends Circle
{
    constructor(Value : number)
    {
        super(Value);
    }

    Circumfarance()
    {
        return 2 * this.PI * this.Radius;
    }
}

var obj1 = new CircleX(10.7);
var Ret : number = 0;

Ret = obj1.CalculateArea();
console.log("Area of circle1 is : "+Ret);

Ret = obj1.Circumfarance();
console.log("Circumfarance of circle1 is : "+Ret);

console.log();

var obj2 = new CircleX(15.5);

Ret = obj2.CalculateArea();
console.log("Area of circle2 is : "+Ret);

Ret = obj2.Circumfarance();
console.log("Circumfarance of circle2 is : "+Ret);

