class A{

    #i=100;

    get_value(){
        return this.#i;
    }
}

let a1=new A();
let v=a1.get_value();
console.log(v);


class B{
    #i=100;
    set_value(v){
        this.#i=v;
        console.log('i value is set to',v);
    }
}

let b1=new B();
b1.set_value(50);
