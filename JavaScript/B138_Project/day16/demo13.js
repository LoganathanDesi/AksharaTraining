class Parent
{
    static i=100;//static public variable
}

class Child extends Parent
{

}

console.log(Parent.i);
console.log(Child.i);