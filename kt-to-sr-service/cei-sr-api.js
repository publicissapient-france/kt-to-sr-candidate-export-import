const axios = require('axios');

const srEndpoint = process.env.SR_ENDPOINT;
const srToken = process.env.SR_TOKEN;

const headers = {
  'X-SmartToken': srToken,
};

const createSrMessage = async content => await axios.post(
  `${srEndpoint}/messages/shares`,
  {
    content,
    shareWith: {
      openNote: true,
    },
  }, {headers});
const createSrCandidate = async (srCandidate) =>
  (await axios.post(
      `${srEndpoint}/candidates`,
      srCandidate,
      {headers})
  ).data;

const updateSrCandidateStatus = async (srStatus, srCandidateId) =>
  (await axios.put(
      `${srEndpoint}/candidates/${srCandidateId}/jobs/7c6c128f-6bec-4a6a-931a-d55fdc830346/status`,
      srStatus,
      {headers})
  ).data;

module.exports = {
  createSrMessage,
  createSrCandidate,
  updateSrCandidateStatus,
};
