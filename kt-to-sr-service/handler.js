'use strict';

const {ktToSr} = require('./candidate-exporter-importer');

module.exports.ktToSr = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  };
  try {
    const data = await ktToSr(JSON.parse(event.body).ktCandidateId);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(
        {
          message: `🎉 Candidate ${data.ktCandidateId} processed`,
          data,
        },
      ),
    };
  } catch (e) {
    e.response ? console.error(e.response.data) : console.error(e);
    return {
      statusCode: e.response ? e.response.status : 500,
      headers,
      body: e.response ? JSON.stringify(e.response.data) : JSON.stringify(e),
    };
  }
};
