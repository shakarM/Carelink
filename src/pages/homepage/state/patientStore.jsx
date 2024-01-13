import { createStore } from "redux";
import patientReducer from "./patientAction";

const store = createStore(patientReducer);

export default store;
