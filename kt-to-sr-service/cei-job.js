// noinspection NonAsciiCharacters
const JOBS_KT_SR = {
  Android: 'c475fe00-205b-47d0-9b8e-7a3d1718c974',
  Architect: '09d8190f-f647-459c-9c26-ef3f7d115bcd',
  'Back Autre': '65f8e2cd-0b03-456e-83e1-1a9539891c9e',
  'Back Java': '03473dd0-174c-48d2-a886-c1772e895a34',
  'Coach Agile': 'ba97d29a-14d6-4a20-86d9-dc4cbfc51938',
  'Data Architect': '15830e3e-43fc-462d-a53d-4fcede269d5c',
  'Data Ingénieur': '9379dbd7-db72-4a9f-ac3c-0380bb65c122',
  'Data Scientist': '2bd83c23-b968-4636-b286-abb046d33c45',
  DevOps: 'a9ac96d8-3c86-44d2-9394-1cf063d0ece3',
  Front: 'cfcf4ca9-6e9a-46c0-9273-c614bd1ad064',
  FullStack: 'e6b81f1e-e2db-46d9-93fc-5192e51a6b26',
  iOS: '4c05bf01-4e51-45b0-8eae-d706a9b87dc5',
  'Product Owner': '9ea54d6b-6253-4f7d-a493-0455f25b772b',
  'Recrutement interne': '4aaf8103-f2e4-49b9-9da3-45a01cb20459',
  'Scrum Master': '31d97491-014d-4b58-bad7-7661f756fa65',
  STL: '6cb00202-0fa5-4c5b-a7b2-45b24be7b1b5',
  Vivier: 'e540795e-2fb1-4a29-97d5-acc11450fe35',
};

const getSrJobId = extra => extra && extra.jobId && JOBS_KT_SR[extra.jobId] ? JOBS_KT_SR[extra.jobId] : JOBS_KT_SR.Vivier;

module.exports = {
  getSrJobId,
};
