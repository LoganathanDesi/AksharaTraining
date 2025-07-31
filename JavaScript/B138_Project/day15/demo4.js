class Student{

    constructor(...data) //rest 
    {
        this.id=data[0];
        this.name=data[1];
        this.ph=data[2];
    }

}

let a=[1,'Surya',456];

let s1=new Student(a[0],a[1],a[2]);
console.log(s1.id,s1.name,s1.ph);

let s2=new Student(...a); //using spread while creating object
console.log(s2.id,s2.name,s2.ph);