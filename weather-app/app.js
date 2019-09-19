const request = require('request');

const url = 'https://api.darksky.net/forecast/ebb35e0b96ae8cab0da103efd6ce97ad/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.currently.temperature);
})