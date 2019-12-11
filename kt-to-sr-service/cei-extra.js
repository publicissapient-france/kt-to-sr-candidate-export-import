const csv = require('csv-parser');
const fs = require('fs');

const KEY_ID = 'ID';
const KEY_SOURCE = 'Source';
const KEY_IN_CHARGE = 'Chargée de recrutement';

const EVENT_DATA = 'data';
const EVENT_END = 'end';
const EVENT_ERROR = 'error';

const getExtra = async ktCandidateId => {
  if (process.env.EXTRA_FILE) {
    return new Promise((resolve, reject) => {
      let extra = null;
      fs.createReadStream(process.env.EXTRA_FILE)
        .pipe(csv())
        .on(EVENT_DATA, (data) => {
          if (`${data[KEY_ID]}` === `${ktCandidateId}`) {
            extra = {
              source: data[KEY_SOURCE],
              inCharge: data[KEY_IN_CHARGE],
            }
          }
        })
        .on(EVENT_END, () => {
          resolve(extra);
        })
        .on(EVENT_ERROR, reject);
    })
  }
};

module.exports = {
  getExtra,
};
