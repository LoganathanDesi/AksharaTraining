class A
{
    m1()
    {
        console.log('m1 is public method')
        this.#m2();
    }

    #m2()
    {
         console.log('m2 is private method')
    }
}

let a1=new A();
a1.m1();
// a1.#m2();