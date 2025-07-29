class Emp
{
    a=0;

    constructor(b)// parmeterized constructor
    {
        this.a=b;
    }
}

let e1=new Emp(10);
console.log(e1.a);//10

let e2=new Emp(20);
console.log(e2.a);//20

let e3=new Emp();
console.log(e3.a);//undefined