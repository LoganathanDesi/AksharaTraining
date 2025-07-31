class Emp
{
   static count=0;
    constructor()
    {
        Emp.count++;
    }

}

let e1=new Emp();
console.log(Emp.count);

let e2=new Emp();
console.log(Emp.count);