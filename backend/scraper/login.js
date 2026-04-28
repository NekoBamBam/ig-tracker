const { chromium } = require("playwright");

(async()=>{

const browser = await chromium.launch({
 headless:false
});

const context = await browser.newContext();

const page = await context.newPage();

await page.goto("https://instagram.com");

console.log(
"Logueate manualmente, cuando termines presiona ENTER en la terminal"
);

await new Promise(resolve =>
 process.stdin.once("data",resolve)
);

await context.storageState({
 path:"auth.json"
});

console.log("Sesion guardada");

await browser.close();

})();