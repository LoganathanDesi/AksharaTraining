class Student{

    constructor(id=0,name='Akshara',ph=123)  // constructor with default value
    {
        this.id=id;
        this.name=name;
        this.ph=ph;
    }

}

let s1=new Student();
console.log(s1.id,s1.name,s1.ph);

let s2=new Student(1,'Surya',456);
console.log(s2.id,s2.name,s2.ph);