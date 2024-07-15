import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import BarChart from './BarChart';
import PieChart from './PieChart';

const ReportsCarousel = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const exampleReports = [
            { type: 'age', title: 'Age Report', data: [{ x: '0-10', y: 20 }, { x: '11-20', y: 35 }, { x: '21-30', y: 45 }] },
            { type: 'gender', title: 'Gender Report', data: [{ label: 'Male', quantity: 60 }, { label: 'Female', quantity: 40 }] },
            { type: 'preExistingDisease', title: 'Pre-Existing Disease Report', data: [{ x: 'Diabetes', y: 25 }, { x: 'Hypertension', y: 30 }, { x: 'Asthma', y: 15 }] },
            { type: 'medicalPractitioner', title: 'Medical Practitioner Report', data: [{ label: 'Doctor', quantity: 40 }, { label: 'Nurse', quantity: 20 }, { label: 'None', quantity: 60 }] }
        ];

        setReports(exampleReports);

        // Example for fetching reports from an API
        /*
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/reports');
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };

        fetchReports();
        */
    }, []);

    const renderChart = (report) => {
        switch (report.type) {
            case 'age':
                return (
                    <div>
                        <BarChart data={report.data} width={400} height={300} />
                    </div>
                );
            case 'gender':
                return (
                    <div>
                        <PieChart data={report.data} width={400} height={300} />
                    </div>
                );
            case 'preExistingDisease':
                return (
                    <div>
                        <BarChart data={report.data} width={400} height={300} />
                    </div>
                );
            case 'medicalPractitioner':
                return (
                    <div>
                        <PieChart data={report.data} width={400} height={300} />
                    </div>
                );
            default:
                return <div>Unknown Report Type</div>;
        }
    };

    return (
        <Carousel variant='dark'>
            {reports.map((report, index) => (
                <Carousel.Item key={index}>
                    <div className="report-container">
                        <h3>{report.title}</h3>
                        {renderChart(report)}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ReportsCarousel;
