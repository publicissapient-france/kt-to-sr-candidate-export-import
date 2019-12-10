const {syncTags} = require('./cei-tag');
const {syncStatus} = require('./cei-status');
const {createSrCandidate} = require('./cei-sr-api');
const {getKtCandidate} = require('./cei-kt-api');
const {syncHistory} = require('./cei-history');
const {toSrExperience} = require('./cei-experience');
const {toSrEducation} = require('./cei-education');

const transformKtCandidateToSrCandidate = (ktCandidate) => ({
  firstName: ktCandidate.content.firstname,
  lastName: ktCandidate.content.lastname,
  email: ktCandidate.content.contacts.mails.length > 0 ? ktCandidate.content.contacts.mails[0] : 'recrutement@xebia.fr',
  phoneNumber: ktCandidate.content.contacts.phones[0],
  ...(ktCandidate.content.locality ? {
    location: {
      //   "country": "string",
      //   "countryCode": "string",
      //   "regionCode": "string",
      region: ktCandidate.content.locality,
      //   "city": "string",
      //   "lat": 0,
      //   "lng": 0
    }
  } : {}),
  web: {
    // "skype": "string",
    linkedin: `https://www.linkedin.com/in/${ktCandidate.linkedin_id}/`,
    // "facebook": "string",
    // "twitter": "string",
    // "website": "string"
  },
  // "tags": [
  //   "string"
  // ],
  education: toSrEducation(ktCandidate.content.education),
  experience: toSrExperience(ktCandidate.content.experience),
  // "sourceDetails": {
  //   "sourceTypeId": "string",
  //   "sourceSubTypeId": "string",
  //   "sourceId": "string"
  // },
  // internal: true
});

const ktToSr = async (ktCandidateId) => {
  if (!ktCandidateId) {
    throw `KinTribe candidate id required`;
  }
  if (!process.env.KT_ENDPOINT || !process.env.KT_TOKEN) {
    throw `Environment variable KT_ENDPOINT and KT_TOKEN required`;
  }
  if (!process.env.SR_ENDPOINT || !process.env.SR_TOKEN) {
    throw `Environment variable SR_ENDPOINT and SR_TOKEN required`;
  }
  console.info(`Processing KinTribe candidate ${ktCandidateId}`);
  const ktCandidate = await getKtCandidate(ktCandidateId);
  const srCandidate = transformKtCandidateToSrCandidate(ktCandidate);
  const {id} = await createSrCandidate(srCandidate);
  console.info(`Candidate created ${id}`);
  await syncHistory(ktCandidate.tasks_history, id);
  console.info(`History synced`);
  await syncStatus(id, ktCandidate.missions);
  console.info(`Status synced`);
  await syncTags(id, ktCandidate.content.skills, ktCandidate.content.languages, ktCandidate.content.categories);
  console.info(`Tags synced`);
  console.info(`🎉 Candidate ${ktCandidateId} processed`);
  return {
    ktCandidateId,
    srCandidateId: id,
  };
};

module.exports = {
  ktToSr,
};
