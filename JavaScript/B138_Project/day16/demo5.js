class A{

    static i=10;//public static var
    static #j=20;//private static var

    static m1()
    {
        console.log('public static method m1 ');
        console.log(this.i,this.#j);
        console.log(A.i,A.#j);
        this.#m2();
        A.#m2();
    }

     static #m2()
    {
        console.log('private static method m2');
        console.log(this.i,this.#j);
         console.log(A.i,A.#j);
    }
}

console.log(A.i);
A.m1();
