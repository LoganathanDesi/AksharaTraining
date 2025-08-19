import {test} from "@playwright/test"

test("test1",async({page})=>{
    await page.goto("https://translate.google.co.in/");
    let title = await page.title();
    console.log(title);
});

test("test2",async({browser})=>{

    let c = await browser.newContext();
    let p1 = await c.newPage();
    await p1.goto("https://translate.google.co.in/");

    let p2 = await c.newPage();
    await p2.goto("https://translate.google.co.in/");

    let c1 = await browser.newContext();
    let p3 = await c1.newPage();
    await p3.goto("https://translate.google.co.in/");

    await p3.waitForTimeout(10000);




});