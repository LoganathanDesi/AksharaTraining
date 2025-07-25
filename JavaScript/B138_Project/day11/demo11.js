//print 25 prime number
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

let count=0;
let number=1;
while(count<25)
{
    if(isPrime(number))
    {
        count++;
        console.log(count,')',number);
        
    }

    number++;
}