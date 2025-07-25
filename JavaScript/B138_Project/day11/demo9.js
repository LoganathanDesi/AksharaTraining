//create a function which return true if the number is prime 
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

for(let i=1;i<=10;i++)
{
    if(isPrime(i))
    {
        console.log(i,' is a prime number')
    }
    else
    {
          console.log(i,' is NOT a prime number')
    }
   
}