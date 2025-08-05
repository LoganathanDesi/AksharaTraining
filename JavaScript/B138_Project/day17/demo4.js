//multi level inheritance
class A{
    i=10;
}

class B extends A{
    j=20;
}

class C extends B{
    k=30;
}


let c1=new C();
console.log(c1.i,c1.j,c1.k);