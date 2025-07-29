function greet()
{
    console.log('Good Morning');
}

function test(a)
{
    console.log('Hi');
    a();
    console.log('Thank You');
}

test(greet);