import React, { useState } from 'react';
import ApproverDashboard from './ApproverDashboard';
import HospitalList from './HospitalList';
import VaccineRegistration from './VaccineRegistration';
import ReactPaginate from 'react-paginate';
import './styles.css';

function AdminDashboard() {
    const components = [
        { name: 'Vaccine Registration', component: <VaccineRegistration /> },
        { name: 'Approver Dashboard', component: <ApproverDashboard /> },
        { name: 'Hospital List', component: <HospitalList /> },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 1;
    const pageCount = Math.ceil(components.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentComponents = components.slice(offset, offset + itemsPerPage);

    return (
        <div className="container mt-4">
            <h1 className="my-4">Admin</h1>
            {currentComponents.map((item, index) => (
                <div key={index} className="mb-4">
                    {item.component}
                </div>
            ))}
            <div className="d-flex justify-content-center">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakLinkClassName={'page-link'}
                />
            </div>
        </div>
    );
}

export default AdminDashboard;
