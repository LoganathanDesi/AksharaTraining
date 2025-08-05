class A{

    m1()
    {
        console.log("m1 of A");
    }
}

class B extends A{
    k=20;
    m1(i)
    {
        console.log(this.k);
        super.m1();
        console.log("m1 of B with arg:",i);
       
    }
}


let a1=new A();
a1.m1();

let b1=new B();
b1.m1(10);
