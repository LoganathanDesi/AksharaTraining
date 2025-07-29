function test(script)
{
    console.log('Open the browser');
    console.log('login');
    script();
    console.log('logout');
    console.log('close the browser');
}


function script1()
{
    
    console.log('create customer');
    console.log('verify customer');
}

function script2()
{
    
    console.log('create product');
    console.log('verify product');
}

test(script1);
test(script2);

