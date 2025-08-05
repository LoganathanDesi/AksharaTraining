class Father
{
    
    marriage()
    {
        console.log("Arranged Marriage");
    }
    
    property()
    {
        console.log("Gold","Land");
    }


}

class Son extends Father
{
    marriage()
    {
        console.log("Love Marriage");
        super.marriage();
    }
}

let s=new Son();
s.property();
s.marriage();
