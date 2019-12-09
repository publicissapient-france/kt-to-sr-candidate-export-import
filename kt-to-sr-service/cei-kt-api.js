const axios = require('axios');

const ktEndpoint = process.env.KT_ENDPOINT;
const ktToken = process.env.KT_TOKEN;

const getKtCandidate = async (ktCandidateId) =>
  (await axios.get(`${ktEndpoint}/profiles/${ktCandidateId}`, {
    headers: {
      Cookie: `remember_me=${ktToken}`,
    },
  })).data;

module.exports = {
  getKtCandidate,
};
