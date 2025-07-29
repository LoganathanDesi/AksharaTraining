class Emp
{
    a=1;//instance/object variable 

    constructor()
    {
        let b=10;//local variable
        console.log(b);
        console.log(this.a);//this means current object
    }
}

let e1=new Emp();
console.log(e1.a);

