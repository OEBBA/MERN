import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VaccinatedPersonsList from './VaccinatedPersonsList';

function ApproverDashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/users')
            .then(response => {
                const pendingUsers = response.data.filter(user => user.approval === 'Pending');
                setUsers(pendingUsers);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, [users]);

    const handleApprove = async (contact) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/users/approve/${contact}`);
            setUsers(users.filter(user => user.contact === contact ? response.data : user));
            console.log(`Approved user with contact: ${contact}`);
        } catch (error) {
            console.error('Error approving user:', error);
        }
    };

    const handleReject = async (contact) => {
        try {
            const response = await axios.post(`http://localhost:4000/api/users/reject/${contact}`);
            setUsers(users.filter(user => user.contact === contact ? response.data : user));
            console.log(`Rejected user with contact: ${contact}`);
        } catch (error) {
            console.error('Error rejecting user:', error);
        }
    };

    return (
        <>
            <div className="card my-4">
                <div className="card-body">
                    <h2 className="card-title">Approver Dashboard</h2>
                    <ul className="list-group list-group-flush">
                        {users.map((user) => (
                            <li key={user.contact} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5><b>{user.name}</b></h5>
                                    <p>Gender: <b>{user.gender}</b> Hospital: <b>{user.appointment.hospital}</b> Vaccine: <b>{user.appointment.vaccine}</b></p>
                                </div>
                                <div className="ms-auto">
                                    <button className="btn btn-primary me-2" onClick={() => handleApprove(user.contact)}>Approve</button>
                                    <button className="btn btn-danger" onClick={() => handleReject(user.contact)}>Reject</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <VaccinatedPersonsList />
        </>
    );
}

export default ApproverDashboard;
