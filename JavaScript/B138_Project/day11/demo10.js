//print prime number between 1 to 25
function isPrime(number)
{
    if(number<=0)
    {
        return false;
    }
    else if(!Number.isInteger(number))
    {
         return false;
    }
    else if(number==1)
    {
         return false;
    }
    else
    {
        let status=true;
        for(let i=2;i<number;i++)
        {
            if(number%i==0)
            {
                status=false;
                break;
            }
        }
        return status;
    }
  
}

for(let i=1;i<=25;i++)
{
    if(isPrime(i))
    {
        console.log(i);
    }
}