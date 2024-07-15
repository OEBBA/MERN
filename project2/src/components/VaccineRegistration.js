import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function VaccineRegistration() {
    const [vaccine, setVaccine] = useState({
        name: '',
        type: '',
        price: '',
        sideEffects: '',
        origin: '',
        dosesRequired: '',
        otherInfo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVaccine({ ...vaccine, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/vaccines/register', vaccine);
            alert('Vaccine Registered Successfully');
            setVaccine({
                name: '',
                type: '',
                price: '',
                sideEffects: '',
                origin: '',
                dosesRequired: '',
                otherInfo: '',
            });
        } catch (error) {
            alert('Error registering vaccine');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-4">Register a Vaccine</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Vaccine Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={vaccine.name} onChange={handleChange} placeholder="Vaccine Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">Vaccine Type</label>
                            <input type="text" className="form-control" id="type" name="type" value={vaccine.type} onChange={handleChange} placeholder="Vaccine Type" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="price" name="price" value={vaccine.price} onChange={handleChange} placeholder="Price" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sideEffects" className="form-label">Side Effects</label>
                            <input type="text" className="form-control" id="sideEffects" name="sideEffects" value={vaccine.sideEffects} onChange={handleChange} placeholder="Side Effects" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="origin" className="form-label">Origin</label>
                            <input type="text" className="form-control" id="origin" name="origin" value={vaccine.origin} onChange={handleChange} placeholder="Origin" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dosesRequired" className="form-label">Doses Required</label>
                            <input type="number" className="form-control" id="dosesRequired" name="dosesRequired" value={vaccine.dosesRequired} onChange={handleChange} placeholder="Doses Required" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="otherInfo" className="form-label">Other Info</label>
                            <input type="text" className="form-control" id="otherInfo" name="otherInfo" value={vaccine.otherInfo} onChange={handleChange} placeholder="Other Info" />
                        </div>
                        <button type="submit" className="btn btn-primary">Register Vaccine</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VaccineRegistration;
