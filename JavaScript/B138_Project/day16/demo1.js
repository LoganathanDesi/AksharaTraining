class A{

    i=10;
    static j=20;

    constructor(i)
    {
        this.i=i;
    }

    print()
    {
        console.log(this.i);//this--> current object
        console.log(A.j);
    }

    static print()
    {
        console.log(this.j);//this --> current class
        console.log(A.j);
    }
}

console.log(A.j);//20
A.print();//20 20

let a1=new A(15);
console.log(a1.i);//15
a1.print();//15 20
