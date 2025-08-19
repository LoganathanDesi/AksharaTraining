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



test("Verify Login Page",()=>{
    console.log("open the browser");
    console.log("enter the url");
    console.log("verify login page is displayed");
});