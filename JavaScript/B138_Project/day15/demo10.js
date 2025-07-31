class A{
    static i=10;
    static j=20;

    n=30;
    p=40;

    //1. method not accessing any variable --method should be static
    static print1()
    {
        console.log('Hi');
    }

    //2. method accessing only static variable --method should be static
    static print2()
    {
         console.log(A.i);
         console.log(A.j);
    }

    //3.  method accessing atleast one non-static variable --method should be non-static
    print3()
    {
         console.log(this.n);

    }

    //4.  method accessing multiple one non-static variable --method should be non-static
    print4()
    {
        console.log(this.n);
        console.log(this.p);
    }

     //5.  method accessing both static & non-static variable --method should be non-static
    print5()
    {
        console.log(A.i);
        console.log(this.p);
    }

}

//write code to call all print 1 to 5

let obj = new A();
console.log('--------');
A.print1();
console.log('--------');
A.print2();
console.log('--------');
obj.print3();
console.log('--------');
obj.print4();
console.log('--------');
obj.print5();
console.log('--------');

