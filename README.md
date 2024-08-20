# CosmicAPI

[![Node.js](https://img.shields.io/badge/v21.1.0-43853D?style=flat&logo=node.js&logoColor=white&label=Node.js&message=Node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/v4.18.2-000000?style=flat&logo=express&logoColor=white&label=Express.js&message=Express.js)](https://expressjs.com/)
[![Axios](https://img.shields.io/badge/v1.3.5-5A29E4?style=flat&logo=axios&logoColor=white&label=Axios&message=Axios)](https://axios-http.com/)
[![Cheerio](https://img.shields.io/badge/v1.0.0-FFC107?style=flat&logo=cheerio&logoColor=white&label=Cheerio&message=Cheerio)](https://cheerio.js.org/)

## Overview
`CosmicAPI` is a Node.js-based API created by `aaronmansfield5`, designed to fetch and return pet values from the website [Cosmic Values](https://petsimulatorvalues.com/) for the popular game Pet Simulator 99. This API allows you to query the value of a specific pet or its variant through a simple HTTP POST request.

## Prerequisites
Before using this API, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation
1. Clone this repository:

```bash
git clone https://github.com/aaronmansfield5/CosmicAPI.git
```

2. Navigate to the project directory:
```bash
cd CosmicAPI
```

3. Install the necessary dependencies:
```bash
npm install
```

## Usage
1. Start the server:
```bash
node app.js
```

2. Send a POST request to the root endpoint `/` with a JSON body containing the `Pet` and optionally `Variant` to retrieve the value.

Example request body:
```json
{
  "Pet": "Huge Cat",
  "Variant": "Rainbow"
}
```

3. The server will respond with a JSON object containing the `Pet` and its `Value`.

Example response:
```json
{
  "Pet": "Rainbow Huge Cat",
  "Value": "4.55B"
}
```

## Node Packages
- [axios](https://www.npmjs.com/package/axios): For making HTTP requests.
- [cheerio](https://www.npmjs.com/package/cheerio): For parsing and scraping HTML.
- [express](https://www.npmjs.com/package/express): Web framework for building the API.

## Acknowledgments
Special thanks to the Cosmic Values team for maintaining the [Cosmic Values](https://petsimulatorvalues.com/) website, which this API interacts with.
