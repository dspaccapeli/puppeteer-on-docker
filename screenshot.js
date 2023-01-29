const puppeteer = require('puppeteer');

const URL = 'https://www.spaccapeli.com';

/* 
** Here is the explanation for the code below:
** 1. It opens a browser
** 2. It goes to the URL
** 3. It takes a screenshot of the full page
** 4. It closes the browser 
*/
const screenshot = async () => {
  console.log('Opening the browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log(`Go to ${URL}`);
  await page.goto(URL);

  console.log('Taking a screenshot...');
  await page.screenshot({
    path: './screenshot.png',
    fullPage: true,
  });

  console.log('Closing the browser...');
  await page.close();
  await browser.close();
  console.log('Job done!');
};

screenshot();