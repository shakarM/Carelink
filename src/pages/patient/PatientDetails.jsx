import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PatientDetails = () => {
  const { id } = useParams();
  const selectedPatient = useSelector((state) =>
    state.patients.find((patient) => patient.id === parseInt(id))
  );

  if (!selectedPatient) {
    return <div>No patient found with the given ID</div>;
  }

  return (
    <div className="patient-details-container">
      <h2>{selectedPatient.name}'s Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Patient ID</th>
            <td>{selectedPatient.id}</td>
          </tr>
          <tr>
            <th>Patient Name</th>
            <td>{selectedPatient.name}</td>
          </tr>
          <tr>
            <th>Date Added</th>
            <td>{selectedPatient.dateAdded}</td>
          </tr>
          <tr>
            <th>Test Type</th>
            <td>{selectedPatient.testType}</td>
          </tr>

          {/* Render additional details based on test type */}
          {selectedPatient.testType === "Blood Test" && (
            <>
              <tr>
                <th>Hemoglobin</th>
                <td>{selectedPatient.hematology?.hemoglobin}</td>
              </tr>
              <tr>
                <th>White Blood Cell Count</th>
                <td>{selectedPatient.hematology?.whiteBloodCellCount}</td>
              </tr>
              <tr>
                <th>Platelet Count</th>
                <td>{selectedPatient.hematology?.plateletCount}</td>
              </tr>
            </>
          )}

          {selectedPatient.testType === "Urine Test" && (
            <>
              <tr>
                <th>Glucose</th>
                <td>{selectedPatient.urineAnalysis?.glucose}</td>
              </tr>
              <tr>
                <th>Protein</th>
                <td>{selectedPatient.urineAnalysis?.protein}</td>
              </tr>
              <tr>
                <th>pH</th>
                <td>{selectedPatient.urineAnalysis?.pH}</td>
              </tr>
            </>
          )}

          {selectedPatient.testType === "X-ray" && (
            <tr>
              <th>Radiology Findings</th>
              <td>{selectedPatient.radiology?.findings}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDetails;
