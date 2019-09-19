const axios = require('axios');

const getClima = async (lat, lng) => {
  const appid = '47553b18a717ae30d0b5e5ad31578708';
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`);
  return resp.data.main.temp;
}

module.exports = {
  getClima
}
