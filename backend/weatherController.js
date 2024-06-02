const params = {
    auth: '244546742139237569339x25697',
    locate: 'Harrisonburg, Virginia',
    json: '1'
  };
  
  async function getWeatherConditions(params) {
    const baseUrl = 'https://geocode.xyz';
    const queryParams = new URLSearchParams(params).toString();
    const geoCodeURL = `${baseUrl}?${queryParams}`;
  
    const response = await fetch(geoCodeURL);
    const geoList = await response.json();
  
    latitude = parseFloat(geoList.latt);
    longitude = parseFloat(geoList.longt);


    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&temperature_unit=fahrenheit&wind_speed_unit=ms&precipitation_unit=inch`)
    


    
    

  }
  
  getWeatherConditions(params);

  