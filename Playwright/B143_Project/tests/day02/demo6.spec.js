import {test} from "@playwright/test"

test("test1",async({page})=>{
await page.waitForTimeout(1000);//1000 ms --1s
await page.goto("http://www.fb.com");
await page.waitForTimeout(1000);
await page.goto("http://www.google.com");
await page.waitForTimeout(1000);
await page.goBack();
await page.waitForTimeout(1000);
await page.goForward();
await page.waitForTimeout(1000);
await page.reload();
await page.waitForTimeout(1000);
});