import {test} from "@playwright/test"

//we can receive browser as argument 
test("my test1",async({browser})=>{
   let p=await browser.newPage();//uses defualt context
   await p.goto("http://www.google.com");
});

test("my test2",async({context})=>{
   let p=await context.newPage();//uses defualt context
   await p.goto("http://www.fb.com");
});

test("my test3",async({page})=>{
   await page.goto("http://www.gmail.com"); 
});