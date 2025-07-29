//write recursive function to find factorial of given number
function test(n)
{
    if(n<=1)
    {
        return 1;
    }
    else
    {
        let a=n-1;
        let fact=n*test(a);
        return fact;
    }

}

console.log(test(4));//4x3x2x1=24