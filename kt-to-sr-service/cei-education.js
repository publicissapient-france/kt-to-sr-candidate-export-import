const moment = require('moment');

const toSrEducation = (ktEducations) =>
  ktEducations.map(education => ({
    degree: education.grade,
    institution: education.title,
    // "major": "string",
    // "current": true,
    // "location": "string",
    // "startDate": "string",
    endDate: toSrMonthYearDate(education.creation_date),
    // "description": "string"
  }));

const toSrMonthYearDate = (date) => moment(date).format('YYYY-MM');

module.exports = {
  toSrEducation,
};
