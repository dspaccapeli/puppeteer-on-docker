const express = require('express');
const scraper = require('../lib/scraper');

const router = express.Router();

router.get('/', async (req, res, next) => {
    // 1. Get the parameter "url"
    const { url } = req.query;
    // 2. Call the scraper function
    const { html, resolvedUrl } = await scraper.htmlScraper(url);

    // 3. Return the array of questions to the client
    res.status(200).json({
        statusCode: 200,
        data: { 
            url: resolvedUrl, 
            html: html
        }
    });
});

module.exports = router;