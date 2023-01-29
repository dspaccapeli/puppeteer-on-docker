const puppeteer = require('puppeteer');

const htmlScraper = async ( URL ) => {
    console.log('Opening the browser...');
    // uncomment when running not on docker e.g. on local machine
    /*
    const browser = await puppeteer.launch();
    */
    // comment when running not on docker e.g. on local machine
    /* */
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: [
            '--no-sandbox',
            '--disable-gpu',
        ]
    });
    
    const page = await browser.newPage();

    console.log(`Navigating to ${URL}...`);
    const response = await page.goto(URL, { waitUntil: 'load' });

    console.log(`Gathering the HTML...`);
    const html = await page.evaluate(() => {
        return new XMLSerializer().serializeToString(document);
    });

    console.log('Closing the browser...');

    await page.close();
    await browser.close();

    console.log('Job done!');

    // return two values in an object to be able to return both the html and the url
    return {
        html: html, 
        resolvedUrl: response.url()
    };
};

module.exports = {
    htmlScraper,
};