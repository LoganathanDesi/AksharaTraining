class Student
{
    static org='Akshara';
    subject='Javascript';

    static print1()
    {
        console.log(this.org);//inside static method this. refer to current class
        console.log(Student.org);//static method can access only static var of class
    }

    print2()
    {
        console.log(this.subject);//inside non-static method this. refer to current object
         console.log(Student.org);//non-static method can accesss both static & non-static variable
    }
}

Student.print1();

let s1=new Student();
s1.print2();