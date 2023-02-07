const getBeers = require('./data');

function main(type) {
    const beers = getBeers();

    for(let i = 0; i < beers.length; i++) {
        if (beers[i].type === type) {
            console.log(beers[i].name);
        }
    }
}

main(process.argv[2]);


// Usage: node filterByType.js <type>
// Example: node filterByType.js ALE