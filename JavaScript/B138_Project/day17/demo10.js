class A{

    constructor()
    {
        this.i=10;
    }
}

class B extends A{

     constructor()
    {
        super();
        this.i=20;
    }

    m1()
    {
        console.log(this.i);
        console.log(super.i);
    }
}

let b1=new B();
b1.m1();