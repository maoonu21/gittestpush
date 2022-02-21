const puppeteer = require('puppeteer');
const hello = require('./action/action');

(async () => {
	const browser = await puppeteer.launch({
		// devtools: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']});
	const page = await browser.newPage();
	await page.setViewport({ width: 1200, height: 800 });	// default 800*400
	await page.goto('https://example.com');
	await page.screenshot({ path: './example.png' });
	// hello
	//test
	await hello();

	await browser.close();
})();


