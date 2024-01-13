export const setPatients = (patients) => ({
  type: "SET_PATIENTS",
  payload: patients,
});

export const selectPatient = (patient) => ({
  type: "SELECT_PATIENT",
  payload: patient,
});

const initialState = {
  patients: [],
  selectedPatient: null,
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PATIENTS":
      return { ...state, patients: action.payload };
    case "SELECT_PATIENT":
      return { ...state, selectedPatient: action.payload };
    default:
      return state;
  }
};

export default patientReducer;
