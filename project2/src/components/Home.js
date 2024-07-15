import React from 'react';
import { Link } from 'react-router-dom';
import ReportCarousel from './ReportCarousel';

function Home() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Welcome to the Vaccination System</h1>
                    <p>Get vaccinated to protect yourself and others.</p>
                    <div className="mb-3">
                        <Link to="/admin" className="btn btn-primary me-2">Go to Admin Dashboard (Admins Only)</Link>
                        <Link to="/register" className="btn btn-primary">User Registration</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="https://healthpolicy.usc.edu/wp-content/uploads/2023/10/covid-vaccine-web.png" className="img-fluid rounded" alt="COVID-19 Vaccine" />
                </div>
            </div>
            <div style={{ marginTop: "50px" }}>
                <ReportCarousel />
            </div>
        </div>
    );
}

export default Home;
