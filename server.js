const express = require('express');
const puppeteer = require('puppeteer');
const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/scrape', async (req, res) => {
  const urls = req.body.urls;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).send('Invalid input');
  }

  try {
    const browser = await puppeteer.launch({headless: 'new'});
    const page = await browser.newPage();

    const productsData = [];

    for (const url of urls) {
      await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 0});

      const productName = await page.$eval('#productTitle', el => el.textContent.trim());
      const productPriceElement = await page.$('.a-price-whole');
      const productPrice = productPriceElement ? await page.evaluate(el => el.textContent.trim(), productPriceElement) : 'N/A';

      productsData.push({name: productName, price: productPrice});
    }

    await browser.close();

    const worksheet = xlsx.utils.json_to_sheet(productsData);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Products');
    const buffer = xlsx.write(workbook, {bookType: 'xlsx', type: 'buffer'});

    res.setHeader('Content-Disposition', 'attachment; filename=products.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);

  } catch (error) {
    console.error(error);
    res.status(500).send('Scraping failed.');
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
