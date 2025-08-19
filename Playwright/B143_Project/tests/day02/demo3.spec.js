import {test} from "@playwright/test"

//we can receive browser as argument 
test("my test1",async({browser})=>{
   let b=await browser.newContext();
   let p=await b.newPage();
   await p.goto("http://www.google.com");
});