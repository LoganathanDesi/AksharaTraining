class A{
    static i=10;
    static #j=20;

    static print_A()
    {
        console.log(this.i,this.#j);
    }
}

class B extends A
{
    static print_B()
    {
        console.log(this.i);// we cant access #j here
    }
}

A.print_A();
B.print_B();
