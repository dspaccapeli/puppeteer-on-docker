<p align="center">
    <img src="https://github.com/dspaccapeli/puppeteer-on-docker/blob/master/media/puppeteer-on-docker.png?raw=true" width="600" alt="Puppeteer-on-Docker logo">
</p>

------

# Puppeteer-on-Docker
Deploy a web scraper using Puppeteer, Express and Docker.

- [How to use](#how-to-use)
- [Main components](#main-components)
- [Additional notes](#additional-notes)

Adapted from: [Deploy to Koyeb](https://web.archive.org/web/20220926030658/https://www.koyeb.com/tutorials/deploy-a-web-scraper-using-puppeteer-node-and-docker)

## How to use:

1. **Clone the repo** <br>
Use the command `git clone dspaccapeli/puppeteer-on-docker` to clone the repo.

2. **Run `docker-compose up`** <br>
You can use the command `docker-compose up -d` to run the app in the background. Attention: you need to have Docker installed on your machine.

3. **(optional) Open `http://localhost:3000` in your browser to verify that the app is running** <br>
Do it only after the `docker-compose up` command has finished. It is not required to run the app.

4. **Perform a GET request to `http://localhost:3000/scrape`** <br>
To scrape the page set with the `url` query parameter (e.g. `http://localhost:3000/page?url=https://www.google.com`) and get the scraped data in JSON format.

Alternatively, you can use it *without Docker*. You can do so by running the command `npm install` and then `npm start` or `npm run dev` if you want the server to restart automatically when you change (and save a file).


## Main components:

```bash
├── app.js
├── routes
│   └── page.js
├── lib
│   └── scraper.js
├── puppeteer.dockerfile
└── docker-compose.yml
```

### > `app.js`

This is the main file of the app. It contains the Express server and the routes `index` and `scrape`.

### > `routes/page.js`

This file contains the route to scrape a page. It uses the `htmlScraper` function from `lib/scraper.js`.

### > `lib/scraper.js`

This file contains the `htmlScraper` function. It uses Puppeteer to scrape the page and returns the scraped data as a HTML string. Note that the `htmlScraper` function is exported as a module. This is required to use it in the `routes/page.js` file.

### > `puppeteer.dockerfile`

This file contains the instructions to build the Docker image for Puppeteer.

### > `docker-compose.yml`

This file contains the instructions to build the Docker image for the app and run it.

## Additional notes:

You can easily add this to your own project by copying the content to your directory, modifying your docker compose file and adding `puppeteer` in your services list. Then you can call Puppeteer from your other services by making a call to the `puppeteer` service by doing e.g. `http://puppeteer:3000/scrape?url=https://www.google.com`.

---

Puppeteer-on-Docker is an open-sourced software licensed under the **[MIT license](https://opensource.org/licenses/MIT)**.

Information about the software license under which the router is released, including any restrictions on use and distribution.
