//create a function to check if the given number is prime or not
function isPrime(number)
{
    if(number<=0)
    {
        msg="invalid input number should be > 0";
    }
    else if(!Number.isInteger(number))
    {
        msg="invalid input, number should be integer";
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
}

isPrime('ten');
isPrime(3.4);
isPrime(-1);
isPrime(0);
isPrime(1);
isPrime(2);
isPrime(4);