const request = require('request');

const url = 'https://api.darksky.net/forecast/ebb35e0b96ae8cab0da103efd6ce97ad/37.8267,-122.4233';

// request({ url: url, json: true }, (error, response) => {
//   if(error){
//     console.log('No se puede conectar en este momento al servicio de clima')
//   }else if (response.body.error){
//     console.log('No se encuentra el lugar seleccionado')
//   }else{
//     console.log(response.body.currently.temperature);
//   }
// })

// Geocoding
// Address -> Lat/long => Weather

mapBoxPK = 'pk.eyJ1IjoiZGFmdHBhdWwiLCJhIjoiY2swc2w5Y3c5MDN0NTNocGRkczJod3ZreSJ9.2LPBa1U01rIFnQhWHoG1Kw'

request({ url: `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapBoxPK}`, json:true }, 
  
  (err, res) => {
    if(err){
      console.log('No se puede conectar en este momento al servicio de geolocalización')
    }else if(!res.body.features.length){
      console.log('No se encuentra el lugar seleccionado')
    }else{
      console.log(res.body.features[0].center);
    }
  } 
)

