const {createSrTags} = require('./cei-sr-api');

const syncTags = async (srCandidateId, skills, languages, categories) =>
  await createSrTags(srCandidateId, {
    tags: [
      ...categories,
      ...languages,
      ...skills,
    ]
  });

module.exports = {
  syncTags,
};
