import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VaccinatedPersonsList() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/users')
            .then(response => {
                const pendingUsers = response.data.filter(user => user.approval === 'Approved');
                setPersons(pendingUsers);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, [persons]);

    return (
        <div className="card my-4">
            <div className="card-body">
                <h2 className="card-title">Vaccinated Persons List</h2>
                <ul className="list-group list-group-flush">
                    {persons.map(person => (
                        <li key={person.id} className="list-group-item">
                            {person.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default VaccinatedPersonsList;
