class Emp
{
    id=1;
    name='Roopa'
}

let e1=new Emp();
let e2=new Emp();
console.log(e1);//Emp{id:1,name:Roopa}
console.log(e2);//Emp{id:1,name:Roopa}


e1.id=2;
e2.name='Ravi';
//each object wil have its own copy of var--> object variable instance varibale
console.log(e1);//Emp{id:2,name:Roopa}
console.log(e2);//Emp{id:1,name:Ravi}