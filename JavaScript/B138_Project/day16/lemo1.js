class A{
    #a = 10;
    b=20;

    print(){
        console.log('method from class A')
    }
}

let objA = new A();
objA.a = 20;
objA.b = 30;

console.log(A.a);
console.log(objA.a);
console.log(objA.b);
