class Student{

    constructor(id=0,name='Akshara',ph=123) 
    {
        this.id=id;
        this.name=name;
        this.ph=ph
    }

    print()//object/instance/non-static method 
    {
        console.log(this.id,this.name,this.ph);
    }
}



let s1=new Student();
s1.print();

let s2=new Student(1,'Surya',456);
s2.print();