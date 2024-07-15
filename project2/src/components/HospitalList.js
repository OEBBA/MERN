import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HospitalList() {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/hospitals')
            .then(response => {
                setHospitals(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="card my-4">
            <div className="card-body">
                <h2 className="card-title">Hospital List</h2>
                <ul className="list-group list-group-flush">
                    {hospitals.map(hospital => (
                        <li key={hospital.name} className="list-group-item">
                            <div>
                                <strong>Name:</strong> {hospital.name}
                            </div>
                            <div>
                                <strong>Address:</strong> {hospital.address}
                            </div>
                            <div>
                                <strong>Type:</strong> {hospital.type}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HospitalList;
