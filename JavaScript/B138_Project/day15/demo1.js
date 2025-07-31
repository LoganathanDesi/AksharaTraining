class Student{

    constructor(name) //parameterize constructor
    {
        this.name=name; //object/instance/non-static var--every object will have its own copy
    }

}

let s1=new Student('Rakesh');
console.log(s1.name);

let s2=new Student('Sudhir');
console.log(s2.name);