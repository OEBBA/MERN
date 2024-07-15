import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserRegistration() {
    const [user, setUser] = useState({
        name: '',
        age: '',
        profession: '',
        contact: '',
        address: '',
        gender: '',
        disease: '',
        hospital: '',
        vaccine: '',
        appointment:
        {
            hospital: null,
            vaccine: '',
            dosesRequired: 0,
            scheduledDate: null,
            chargesPaid: false,
            vaccinated: false
        }

    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const randomVaccine = ['Pfizer', 'Moderna', 'Johnson & Johnson'][Math.floor(Math.random() * 3)];
            const randomDoses = Math.floor(Math.random() * 3) + 1;
            const randomScheduledDate = new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000);

            setUser({
                ...user,
                appointment: {
                    hospital: 'General Hospital',
                    vaccine: randomVaccine,
                    dosesRequired: randomDoses,
                    scheduledDate: randomScheduledDate,
                    chargesPaid: false,
                    vaccinated: false
                }
            });

            await axios.post('http://localhost:4000/api/users/register', user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            alert('User Registered Successfully');
            setUser({
                name: '',
                age: '',
                profession: '',
                contact: '',
                address: '',
                gender: '',
                disease: '',
                hospital: '',
                vaccine: '',
                appointment: {
                    hospital: null,
                    vaccine: '',
                    dosesRequired: 0,
                    scheduledDate: null,
                    chargesPaid: false,
                    vaccinated: false
                }
            });

            navigate('/appointment');
        } catch (error) {
            console.log(error);
            alert('Error registering user');
        }
    };


    return (
        <div className="container mt-5">
            <h2 style={{ textAlign: 'center' }}>User Registration</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" name="name" value={user.name} onChange={handleChange} className="form-control" placeholder="Enter your name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input type="number" id="age" name="age" value={user.age} onChange={handleChange} className="form-control" placeholder="Enter your age" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profession" className="form-label">Profession</label>
                            <input type="text" id="profession" name="profession" value={user.profession} onChange={handleChange} className="form-control" placeholder="Enter your profession" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">Contact</label>
                            <input type="text" id="contact" name="contact" value={user.contact} onChange={handleChange} className="form-control" placeholder="Enter your contact number" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" id="address" name="address" value={user.address} onChange={handleChange} className="form-control" placeholder="Enter your address" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select id="gender" name="gender" value={user.gender} onChange={handleChange} className="form-select" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disease" className="form-label">Any Disease (if applicable)</label>
                            <input type="text" id="disease" name="disease" value={user.disease} onChange={handleChange} className="form-control" placeholder="Enter any existing disease" />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserRegistration;
