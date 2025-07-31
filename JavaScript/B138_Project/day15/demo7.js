class Emp
{
    static company='TCS';

    constructor(name)
    {
        this.name=name;
    }

    print()
    {
        console.log(this.name);
         console.log(Emp.company);
    }
}


let e1=new Emp('Asha');
e1.print();

let e2=new Emp('Bhavya');
e2.print();
e2.name='Bhavya Ramesh';
Emp.company='TCS India';

e2.print();
