import chrome from 'chrome-aws-lambda';

const puppeteer = chrome.puppeteer;

export async function handler(event) {
	const { url, width, height } = event.queryStringParameters;

	const browser = await puppeteer.launch({
		args: chrome.args,
		executablePath: await chrome.executablePath,
	});

	const page = await browser.newPage();

	await page.setViewport({
		width: Number(width),
		height: Number(height),
	});

	await page.goto(url);

	await page.screenshot();

	return {
		statusCode: 200,
		isBase64Encoded: true,
		headers: { 'Content-Type': 'image/png' },
		body: await page.screenshot({
			encoding: 'base64',
		}),
	};
}
