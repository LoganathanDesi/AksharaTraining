class A{
    i=10;
     #j=20;

    print_A()
    {
        console.log(this.i,this.#j);
    }
}

class B extends A
{
    print_B()
    {
        console.log(this.i);// we cant access #j here
    }
}

let a1=new A();
a1.print_A();

let b1=new B();
b1.print_B();
