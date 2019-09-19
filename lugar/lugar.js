const axios = require('axios');

const getLugarLatLng = async (direccionArg) => {
  // Formatear dirección
  const direccionLimpia = encodeURI(direccionArg);
  // Crear una instancia de la petición
  const instancia = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionLimpia}`,
    headers: {
      'X-RapidAPI-Key': 'a4cead5de5msh57ea73da0395d1ap1d18f6jsnee0e8ae73a87'
    }
  });
  // Hacer petición
  const resp = await instancia.get();
  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccionArg}`);
  }
  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;
  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}
