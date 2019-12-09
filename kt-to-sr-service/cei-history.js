const moment = require('moment');
const {createSrMessage} = require("./cei-sr-api");

const MESSAGE_TYPE_MAP = {
  in_mail: 'Inmail',
  reminder: 'Reminder',
  note: 'Note',
  phonecall: 'Call',
  creation: 'Creation',
  connect: 'Connect',
  mail: 'Email',
  history: 'History'
};

const syncHistory = async (ktHistories, srCandidateId) => {
  const histories = ktHistories
    .filter(h => h.type !== 'history')
    .sort((h1, h2) => moment(h1.creation_date).isBefore(moment(h2.creation_date)) ? -1 : 1);

  for (const ktHistory of histories) {
    await createSrMessage(toSrMessageContent(ktHistory, srCandidateId));
  }
};

const toSrMessageContent = (ktHistory, srCandidateId) => {
  const author = ktHistory.author_name;
  const content = ktHistory.content ? ktHistory.content.replace(/\n/g, '<br/>') : '';
  const candidate = `#[CANDIDATE:${srCandidateId}]`;
  const type = MESSAGE_TYPE_MAP[ktHistory.type];
  const date = toPrettyDate(ktHistory.creation_date);

  return `<b>${author}</b> - <i>${type}</i> - ${date} :<br/><br/>${content}<br/><br/>${candidate}`
};

const toPrettyDate = date => moment(date).format('DD MMM YYYY');

module.exports = {
  syncHistory,
};
