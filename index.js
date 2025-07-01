const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://en.wikipedia.org/wiki/Economy_of_Bangladesh';

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // Extracting data
    const population = $('th:contains("Population")').next().text().trim();
    const gdp = $('th:contains("GDP")').next().text().trim();
    const gdpPerCapita = $('th:contains("GDP per capita")').next().text().trim();

    console.log(`Population: ${population}`);
    console.log(`GDP: ${gdp}`);
    console.log(`GDP per capita: ${gdpPerCapita}`);
  })
  .catch(error => {
    console.error(`Error fetching data: ${error}`);
  });
