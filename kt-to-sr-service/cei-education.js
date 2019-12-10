const moment = require('moment');

const containsGradeAndTitle = education =>
  education.grade &&
  education.grade.length > 0 &&
  education.title &&
  education.title.length > 0;

const toSrEducation = (ktEducations) =>
  ktEducations
    .filter(containsGradeAndTitle)
    .map(education => ({
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
