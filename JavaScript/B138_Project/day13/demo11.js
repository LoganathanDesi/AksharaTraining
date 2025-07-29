function test(n)
{
    if(n>0)
    {
        test(n-1);
        console.log(n);
    }
    
}

// test(0);//End
// test(1);//End 1
test(10);

