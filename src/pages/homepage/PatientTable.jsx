// PatientTable.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPatients, selectPatient } from "./state/patientAction";
import { useNavigate } from "react-router-dom";
import "./PatientTable.css";
const PatientTable = () => {
  const patients = useSelector((state) => state.patients);
  const selectedPatient = useSelector((state) => state.selectedPatient);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = [
          {
            id: 1,
            name: "Patient 1",
            dateAdded: "2022-01-15",
            testType: "Blood Test",
            hematology: {
              hemoglobin: 14.2,
              whiteBloodCellCount: 7500,
              plateletCount: 300000,
            },
          },
          {
            id: 2,
            name: "Patient 2",
            dateAdded: "2022-01-16",
            testType: "Urine Test",
            urineAnalysis: {
              glucose: "Negative",
              protein: "Trace",
              pH: 6.5,
            },
          },
          {
            id: 3,
            name: "Patient 3",
            dateAdded: "2022-01-17",
            testType: "X-ray",
            radiology: {
              findings: "No abnormalities detected.",
            },
          },
          // Add more patient data as needed
        ];

        dispatch(setPatients(data));
      } catch (error) {
        console.error("Error fetching patient data", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handlePatientClick = (patient) => {
    dispatch(selectPatient(patient));
    navigate(`/patient/${patient.id}`);
  };

  return (
    <div className="patient-table-container">
      <h2>Patient Table</h2>
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Date Added</th>
            <th>Test Type</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} onClick={() => handlePatientClick(patient)}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.dateAdded}</td>
              <td>{patient.testType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
