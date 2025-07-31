// in encapsulation we perform 3 steps

// 1. declaration--> #i;

// 2. initialization --> inside the constructor --> this.#i=i;

// 3. utilization--> getter/setter method 

class A{
    //declaration
    #i;

    //initialization
    constructor(i){
        this.#i=i;
    }

    //utilization
    get_value(){
        return this.#i;
    }

    set_value(n){
        this.#i=n;
    }
}

let a1=new A(10);
console.log(a1.get_value());
a1.set_value(20);
console.log(a1.get_value());