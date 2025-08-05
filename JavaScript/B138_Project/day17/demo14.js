class Student{

    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }

}

let s1=new Student(1,"Ravi");
console.log(s1.id,s1.name);

function Emp(id,name) //constructor function
{
  this.id=id;
  this.name=name; 
}

let e1=new Emp(1,"Ravi");
console.log(e1.id,e1.name);