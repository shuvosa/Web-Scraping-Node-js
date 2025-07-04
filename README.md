# Web Scraping Using cheerio

This Node.js project demonstrates how to scrape economic data from the Wikipedia page for the Economy of Bangladesh using [axios](https://www.npmjs.com/package/axios) and [cheerio](https://www.npmjs.com/package/cheerio).

## Features

- Fetches the Wikipedia page for the Economy of Bangladesh
- Extracts key data: **Population**, **GDP**, and **GDP per capita**
- Outputs the extracted data to the console

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/shuvosa/Web-Scraping-Node-js.git
   cd Web-Scraping-Node-js
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Run the script with Node.js:

```sh
node index.js
```

You should see output similar to:

```
Population: 169,356,251 (2023 est.)
GDP: $455.7 billion (nominal, 2023 est.)
GDP per capita: $2,687 (nominal, 2023 est.)
```

## How it Works

- Uses `axios` to fetch the HTML content of the Wikipedia page.
- Parses the HTML with `cheerio` to extract table data for Population, GDP, and GDP per capita.

See [`index.js`](index.js) for the implementation.

## License

This project is licensed under the MIT License.
