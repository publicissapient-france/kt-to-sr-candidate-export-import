const {updateSrCandidateStatus} = require("./cei-sr-api");

const transformKtStatusToSrStatus = (ktStatus) => {
  switch (ktStatus) {
    case 'hired':
      return {status: 'HIRED'};
    case 'stop-process':
    case 'not-selected':
    case 'refus-sur-qualif':
    case 'refus-xebia-entretien-technique':
    case 'refus-xebia-entretien-final':
    case 'refus-sur-exo':
    case 'no-go-qualif-tel':
    case 'no-go-technique':
      return {status: 'REJECTED'};
    case 'shortlist':
      return {status: 'IN_REVIEW', subStatus: 'Shortlist'};
    case 'test-envoye':
      return {status: 'IN_REVIEW', subStatus: 'Test Assignment'};
    case 'test-recu':
      return {status: 'IN_REVIEW', subStatus: 'Test reçu'};
    case 'entretien':
      return {status: 'IN_REVIEW', subStatus: 'Phone Screen'};
    case 'qualif-telephonique-planifiee':
      return {status: 'IN_REVIEW', subStatus: 'Phone Screen'};
    case 'entretien-technique-planifie':
      return {status: 'INTERVIEW', subStatus: 'Entretien technique planifié'};
    case 'entretien-final-planifie':
      return {status: 'INTERVIEW', subStatus: 'Final Interview'};
    case 'proposition-envoyee':
      return {status: 'OFFERED', subStatus: 'Offer Pending'};
    case 'proposition-acceptee':
      return {status: 'OFFERED', subStatus: 'Offer Accepted'};
    case 'exo-non-recu':
    case 'refus-candidat-:-concurrence':
    case 'refus-candidat-:-salaire':
    case 'refus-candidat-:-autres':
    case 'refus-candidat-:-son-employeur':
    case 'refus-candidat-:-startup-/-final':
    case 'refus-candidat-:-freelance':
    case 'proposition-refusee-:-autres':
    case 'proposition-refusee-:-salaire':
    case 'proposition-refusee-:-independant':
    case 'proposition-refusee-:-startup-/-client-final':
    case 'proposition-refusee-:-concurrence':
    case 'no-go-candidat':
    case 'refus-candidat-:-province-/-etranger':
    case 'archived':
      return 'WITHDRAWN';
  }
};

const syncStatus = async (srCandidateId, ktStatus) => {
  if (ktStatus.length > 0) {
    return await updateSrCandidateStatus(srCandidateId, transformKtStatusToSrStatus(ktStatus[ktStatus.length - 1].step_id))
  }
};

module.exports = {
  syncStatus,
};
