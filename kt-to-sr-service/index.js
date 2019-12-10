const {ktToSr} = require('./candidate-exporter-importer');

ktToSr()
  .catch(err => err.response ? console.error(err.response.data) : console.error(err));
