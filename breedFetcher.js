const request = require('request');
const breed = process.argv[2];

if (breed === undefined) return console.log('A breed, please!');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('Request error:\n', error);
    return;
  }

  let newBody = JSON.parse(body);
  
  if (newBody.length === 0) {
    console.log(`Sorry, ${breed} breed is not found.`);
    return;
  }

  console.log(newBody);
});