const { chromium } = require("playwright");
const fs = require("fs");

async function runFollowersScraper(){

 const browser = await chromium.launch({
   headless:false
 });

 const context = await browser.newContext({
   storageState:"../auth.json"
 });

 const page = await context.newPage();

 await page.goto(
   "https://www.instagram.com/coriannicolas/"
 );

 await page.waitForTimeout(3000);

 await page.locator(
'a[href$="/followers/"]'
 ).click();

 await page.waitForSelector(
'div[role="dialog"]'
 );

 const dialog =
 page.locator(
'div[role="dialog"]'
 ).first();

 await dialog.click();

 await page.mouse.wheel(0,-10000);

 await page.waitForTimeout(2000);


 for(let i=0;i<35;i++){

   await page.mouse.wheel(
     0,
     3000
   );

   await page.waitForTimeout(1500);

 }


 const followers =
 await page.locator(
'a[href^="/"]'
 ).evaluateAll(links=>

[...new Set(
links
.map(a=>a.getAttribute("href"))
.filter(Boolean)
.map(x=>x.replace(/\//g,""))
.filter(x=>
 /^[a-zA-Z0-9._]+$/.test(x)
)
)]

);


fs.writeFileSync(
"followers.json",
JSON.stringify(
followers,
null,
2
)
);

await browser.close();

return followers.length;

}

module.exports = runFollowersScraper;