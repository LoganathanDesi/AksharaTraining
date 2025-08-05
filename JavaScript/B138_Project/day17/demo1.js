class A{
    i=10;
    #j=20; //private members are not inherited
}

class B extends A{

}

let b1=new B();
console.log(b1.i);