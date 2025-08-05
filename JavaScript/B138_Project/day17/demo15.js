class Student{

    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }

}

let s1=new Student(1,"Ravi");
console.log(s1.id,s1.name);

let s2=new Object();
s2.id=1;
s2.name='Ravi';
console.log(s2.id,s2.name);


