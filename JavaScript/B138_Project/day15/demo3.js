class Student{

    constructor(id=0,name='Akshara',ph=123) 
    {
        this.id=id;
        this.name=name;
        this.ph=ph;
    }

}

let a=[1,'Surya',456];

let s1=new Student(a[0],a[1],a[2]);
console.log(s1.id,s1.name,s1.ph);

let s2=new Student(...a); //using spread while creating object
console.log(s2.id,s2.name,s2.ph);