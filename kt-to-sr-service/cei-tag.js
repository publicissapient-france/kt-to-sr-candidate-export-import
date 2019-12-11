const {createSrTags} = require('./cei-sr-api');

const syncTags = async (srCandidateId, skills, languages, categories, extra) =>
  await createSrTags(srCandidateId, {
    tags: [
      ...(extra && extra.inCharge ? [extra.inCharge] : []),
      ...categories,
      ...languages,
      ...skills,
    ].map(tag => tag.substring(0, 50))
  });

module.exports = {
  syncTags,
};
