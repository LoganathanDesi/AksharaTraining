import {test,chromium} from "@playwright/test"
async function script1({page}){
  await page.goto("http://www.google.com");//enter the url
  console.log(await page.title())//print the title
  await page.close();
}

test("this is my script1",script1);