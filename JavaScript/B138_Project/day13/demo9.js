//print 1 to 10 using recursive function
//function can call itself --> recusrive function

function test(n)
{
    if(n<=0)
    {
        console.log('End');
    }
    else
    {
        let a=n;
        n--;
        test(n);
        console.log(a);
    }
}

// test(0);//End
// test(1);//End 1
// test(2);//End 1 2 
// test(3);// End 1 2 3
test(10);//End 1 2....10