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

const createSrCandidate = async (srCandidate, jobId) =>
  (await axios.post(
      `${srEndpoint}/jobs/${jobId}/candidates`,
      srCandidate,
      {headers})
  ).data;

const updateSrCandidateStatus = async (srCandidateId, srJobId, srStatus) =>
  (await axios.put(
      `${srEndpoint}/candidates/${srCandidateId}/jobs/${srJobId}/status`,
      srStatus,
      {headers})
  ).data;

const createSrTags = async (srCandidateId, srTags) =>
  (await axios.put(
      `${srEndpoint}/candidates/${srCandidateId}/tags`,
      srTags,
      {headers})
  ).data;

module.exports = {
  createSrMessage,
  createSrCandidate,
  updateSrCandidateStatus,
  createSrTags,
};
