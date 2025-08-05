class A{

    constructor(i)
    {
        this.i=i;
    }
}

class B extends A{

     constructor(j)
    {
       
        console.log("B class constructor");
       
        super(j);//call parent class constructor 
        this.p=8;
    }
   
}

let b1=new B(10);
console.log(b1.i);
console.log(b1.p);
