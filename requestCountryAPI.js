const request = require('request');
let recordCount = 0;
let countryList = [];

/*Time to play the Puzzle! From NPR's Sunday Puzzle
* July 11, 2021 challenge: This week's challenge comes from listener Peter Collins, of Ann Arbor, Mich.
* Think of a country. Embedded in consecutive letters is a well-known brand name. The first, second,
* eighth and ninth letters of the country, in order, spell a former competitor of that brand.
* Name the country and the brands.
*
* After reading a comprehensive list of countries, the he first, second,
* eighth and ninth letters of the country as well as the country name will be printed to the console. See if
* you can solve the puzzle by finding a Brand in column one and another like-Brand spelled out consecutively.*/


request('https://restcountries.eu/rest/v2/all?fields=name', { json: true }, (err, res, body) => {
    if (err) { return console.log("error: " + err); }

    body.forEach(country => {

            if ((country.name).length > 8)  {
                let newName = (country.name).replace(/\s+/g, '')
                countryList.push([country.name, (newName).substring(0,2)+(newName.substring(7,9))])
                console.log((newName).substring(0,2)+(newName.substring(7,9)), country.name )

                recordCount++
            }
        }
    )

    console.log("recordCount: " + countryList.length + " out of " + body.length + " countries")
});

