const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
  
    let newBody = JSON.parse(body);

    if (newBody.length === 0) {
      // return callback(`Sorry, ${breedName} breed is not found.`, null);
      return callback(`Sorry, the breed asked is not found.`, null);
    }
    return callback(null, newBody[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};