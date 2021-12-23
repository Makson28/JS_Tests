'use srtict';

const accountPatients = (freeBeads) => {
  storage = {
    patients: freeBeads,
    beads: freeBeads
  };
  let copyStorage = {
    ...storage
  };

  const addPatient = () => {
    if (copyStorage.patients >= 1) {
      --copyStorage.patients;
      console.log(`A patient was admitted, ${copyStorage.patients} beds are available`);
    } else {
      console.log('Can not admit a patient, no beds available');
    }
  }

  const dischargePatient = () => {
    if (copyStorage.patients >= 0) {
      ++copyStorage.patients;
      if (copyStorage.patients > copyStorage.beads) {
        console.log('There are no patients to discharge');
        --copyStorage.patients;
      } else {
        console.log(`A patient was discharged, ${copyStorage.patients} beds are available`);
      }

    }
  }
  return [addPatient, dischargePatient];
}

const [addPatient, dischargePatient] = accountPatients(5);
addPatient();
dischargePatient();