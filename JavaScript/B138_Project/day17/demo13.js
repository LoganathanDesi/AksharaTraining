class Student{

    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }

    print()
    {
        console.log(this.id,this.name);
    }

}


let s1=new Student(1,"Abhi");
s1.print();
//--------------------------------------------------------------------------
//we can directly create object without class

let s2={
    id:1,
    name:"Abhi",
    print()
    {
        console.log(this.id,this.name);
    }
}

s2.print();