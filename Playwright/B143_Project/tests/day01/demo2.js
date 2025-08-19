import {chromium} from "playwright";

async function test1(){
  let browser =  await chromium.launch();//open chrome browser
  let page=await browser.newPage();// open new page(tab)
  await page.goto("http://www.google.com");//enter the url
  console.log(await page.title())//print the title
  await browser.close();//close the browser
}

test1();