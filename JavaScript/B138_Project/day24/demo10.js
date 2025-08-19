function test(description,script)
{
    console.log("Executing:",description);
    try
    {
        script();
        console.log("PASS");
    }
    catch(err)
    {
         console.log("FAIL");
         console.error(err);
    }
}


function script1()
{
    console.log("open the browser");
    console.log("open the url");
    console.log("verify login page is displayed");
}


test("Verify Login Page",script1);