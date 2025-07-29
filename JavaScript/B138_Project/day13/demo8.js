//function can call itself --> recusrive function

function test(n)
{
    if(n>0)
    {
        console.log(n);
        n--;
        test(n);
       
    }
    // else
    // {
    //      console.log('End');
    // }
}

// test(0);//End
// test(1);//1 End
// test(2);//2 1 End
// test(3);//3 2 1 End
test(10);