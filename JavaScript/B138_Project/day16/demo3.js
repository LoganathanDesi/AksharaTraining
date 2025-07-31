class A
{
   i=10; //public non-static variable
   #j=20;//private non-static variable

   print()//public non-static method
   {
        console.log(this.i);
        console.log(this.#j);
   }
}

let a1=new A();
console.log(a1.i);
a1.print();