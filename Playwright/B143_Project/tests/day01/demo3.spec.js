import {test} from "playwright/test"

//playwright automatically opens the browser and closes the browser
async function script1({page}){
  await page.goto("http://www.google.com");//enter the url
  console.log(await page.title())//print the title
}

test("this is my script1",script1);