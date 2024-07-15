import React from 'react';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
    const appointmentDetails = {
        hospital: 'General Hospital',
        vaccine: 'Moderna',
        dosesRequired: 2,
        scheduledDate: new Date('2024-08-01'),
        charges: '$1000',
        vaccinated: false
    };

    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Appointment Details</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Hospital:</strong> {appointmentDetails.hospital}</li>
                        <li className="list-group-item"><strong>Vaccine:</strong> {appointmentDetails.vaccine}</li>
                        <li className="list-group-item"><strong>Doses Required:</strong> {appointmentDetails.dosesRequired}</li>
                        <li className="list-group-item"><strong>Scheduled Date:</strong> {appointmentDetails.scheduledDate.toLocaleDateString()}</li>
                        <li className="list-group-item"><strong>Charges:</strong> {appointmentDetails.charges}</li>
                        <li className="list-group-item"><strong>Vaccinated:</strong> {appointmentDetails.vaccinated ? 'Yes' : 'No'}</li>
                    </ul>
                </div>
            </div>
            <br />
            <button className="btn btn-primary" onClick={() => { navigate('/paid') }}>Pay Outstanding Charges</button>
        </div>
    );
}

export default Appointment;
