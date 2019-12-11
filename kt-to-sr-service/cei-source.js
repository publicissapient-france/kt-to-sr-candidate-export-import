// noinspection NonAsciiCharacters
const SOURCES = {
  'Annonce': '8a572961-ca1a-4930-b696-61dd145be5d1',
  'Cabinet de chasse': 'dee57c53-a324-41d1-a8cd-3540d45670f2',
  'Candidature Spontanée issue du Bouche à Oreille': 'e118c051-e24c-4b2f-93f9-cbb57b10c266',
  'Candidature Spontanée issue du Marketing (Event, Blog, etc.)': '43b774cb-c02d-46b3-88ae-f1b1f9181002',
  'Chasse pour la 1ère fois': '43b774cb-c02d-46b3-88ae-f1b1f9181002',
  'Chasse puis relance': 'e46974a8-d2f3-4c2d-877f-0410ea282b0e',
  'Cooptation': '638fc452-87d1-4b45-b77b-098c316112ee',
  'PublicisSapient': '00400cdb-cff5-479e-bc55-4c7cfde7270f',
  'Talent IO': 'efb913e0-ab13-4a6d-ad32-af8f31222a4a',
};

const getSource = (extra) => {
  const sourceId = SOURCES[extra.source];
  return sourceId ? {
    sourceDetails: {
      sourceId,
      sourceTypeId: 'OTHER',
    },
  } : {};
};

module.exports = {
  getSource,
};
