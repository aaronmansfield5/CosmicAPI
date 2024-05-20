const axios = require('axios');
const cheerio = require('cheerio');

async function findCosmic(pet, variant) {
    let URL = `https://petsimulatorvalues.com/details.php`;
    if(variant) {
        URL += `?Name=${variant}+${pet.replaceAll(" ", "+")}`
    } else {
        URL += `?Name=${pet.replaceAll(" ", "+")}`
    }
    let toRead = await axios.get(URL);
    const $ = await cheerio.load(toRead.data)
    const value = await($('body > section.petBannerAll.pt-4 > div > div > div > div > div.col-9 > div > div > div:nth-child(1) > div:nth-child(2) > span.float-right')).text();

    return value;
}

module.exports = {
    findCosmic
}