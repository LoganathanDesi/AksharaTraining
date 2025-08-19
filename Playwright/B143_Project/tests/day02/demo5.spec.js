import {test} from "@playwright/test"

test("test1",async ({page})=>{
    //enter the url
    await page.goto("http://www.google.com");
    //get the title & print it
    let title=await page.title();
    console.log(title);
    //close the browser
    await page.close();
});