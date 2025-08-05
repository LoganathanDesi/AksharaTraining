//Hierarchical
class A{
    i=10;
}

class B extends A{
    j=20;
}

class C extends A{
    k=30;
}

let a1=new A();
console.log(a1.i);

let b1=new B();
console.log(b1.i,b1.j);

let c1=new C();
console.log(c1.i,c1.k);