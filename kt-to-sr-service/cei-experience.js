const moment = require('moment');

const toSrExperience = (ktExperiences) =>
  ktExperiences
    .filter(ktExperience => ktExperience.title && ktExperience.company)
    .map(experience => ({
      title: experience.position,
      company: experience.company,
      // "current": true,
      startDate: toSrDate(experience.date.from),
      endDate: toSrDate(experience.date.to),
      // "location": "string",
      // "description": "string"
    }));

const toSrDate = (date) => moment(date).format('YYYY-MM-DD');

module.exports = {
  toSrExperience,
};
