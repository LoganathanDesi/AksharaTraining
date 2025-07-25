let number=5.8;
let msg;

if(number<=0)
{
    msg="invalid input";
}
else if(number==1)
{
     msg="Not a prime number";
}
else
{
    msg="prime number";
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            msg="Not a prime number";
            break;
        }
    }
}
console.log(msg);