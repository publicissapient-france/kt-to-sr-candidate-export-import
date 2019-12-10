const {ktToSr} = require('./candidate-exporter-importer');

ktToSr(process.argv[2])
  .catch(err => err.response ? console.error(err.response.data) : console.error(err));
