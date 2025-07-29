//recursive funciton to find sum of n numbers
function test(n)
{
    if(n<=0)
    {
        return 0;
    }
    else
    {
        let a=n-1;
        let sum=n+test(a);
        return sum;
    }

}

// console.log(test(0));//0
// console.log(test(1));//1
// console.log(test(2));//3
// console.log(test(3));//6
// console.log(test(4));//10
console.log(test(5));//15