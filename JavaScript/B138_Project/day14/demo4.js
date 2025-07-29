class Emp
{
    id=1;
    name='Ravi';
}

let e1=new Emp();
let e2=new Emp();
let e3=e2;

e1.id=2;
e2.id=3;

console.log(e1);
console.log(e2);
console.log(e3);