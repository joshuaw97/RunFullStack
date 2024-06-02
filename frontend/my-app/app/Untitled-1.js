

const axios = require('axios');


const params = {
  auth: '244546742139237569339x25697',
  locate: 'Harrisonburg, Virginia',
  json: '1'
}

axios.get('https://geocode.xyz', { params })
  .then(response => {
    const { latt, longt } = response.data;
    const latitude = parseInt(latt);
    const longitude = parseInt(longt);
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    
get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&temperature_unit=fahrenheit&wind_speed_unit=ms&precipitation_unit=inch`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  })
  .catch(error => {
    console.log(error);
  });
