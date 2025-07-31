class A
{
   i=10; //public non-static variable
   #j=20;//private non-static variable

}

let a1=new A();
console.log(a1.i);
// console.log(a1.#j);// we cant access private variable outside the class