import React, { useState, useEffect } from 'react';

const RESULTS_PER_PAGE = 10;

const USERS_URL = {
    "count": 41,
    "results": [
        { "id": 1, "firstName": "David", "lastName": "Wallace" },
        { "id": 2, "firstName": "Sonia", "lastName": "Ross" },
        { "id": 3, "firstName": "Michael", "lastName": "Scott" },
        { "id": 4, "firstName": "Jim", "lastName": "Halpert" },
        { "id": 5, "firstName": "Pam", "lastName": "Beesly" },
        { "id": 6, "firstName": "Dwight", "lastName": "Schrute" },
        { "id": 7, "firstName": "Angela", "lastName": "Martin" },
        { "id": 8, "firstName": "Stanley", "lastName": "Hudson" },
        { "id": 9, "firstName": "Phyllis", "lastName": "Vance" },
        { "id": 10, "firstName": "Kevin", "lastName": "Malone" },
        { "id": 11, "firstName": "Toby", "lastName": "Flenderson" },
        { "id": 12, "firstName": "Kelly", "lastName": "Kapoor" },
        { "id": 13, "firstName": "Ryan", "lastName": "Howard" },
        { "id": 14, "firstName": "Oscar", "lastName": "Martinez" },
        { "id": 15, "firstName": "Meredith", "lastName": "Palmer" },
        { "id": 16, "firstName": "Creed", "lastName": "Bratton" },
        { "id": 17, "firstName": "Jan", "lastName": "Levinson" },
        { "id": 18, "firstName": "Karen", "lastName": "Filippelli" },
        { "id": 19, "firstName": "Roy", "lastName": "Anderson" },
        { "id": 20, "firstName": "Andy", "lastName": "Bernard" },
        { "id": 21, "firstName": "Darryl", "lastName": "Philbin" },
        { "id": 22, "firstName": "Holly", "lastName": "Flax" },
        { "id": 23, "firstName": "Gabe", "lastName": "Lewis" },
        { "id": 24, "firstName": "Erin", "lastName": "Hannon" },
        { "id": 25, "firstName": "Robert", "lastName": "California" },
        { "id": 26, "firstName": "Nellie", "lastName": "Bertram" },
        { "id": 27, "firstName": "Clark", "lastName": "Green" },
        { "id": 28, "firstName": "Pete", "lastName": "Miller" },
        { "id": 29, "firstName": "Cathy", "lastName": "Simms" },
        { "id": 30, "firstName": "Bob", "lastName": "Vance" },
        { "id": 31, "firstName": "David", "lastName": "Wallace" },
        { "id": 32, "firstName": "Charles", "lastName": "Miner" },
        { "id": 33, "firstName": "Todd", "lastName": "Packer" },
        { "id": 34, "firstName": "Mose", "lastName": "Schrute" },
        { "id": 35, "firstName": "Jo", "lastName": "Bennett" },
        { "id": 36, "firstName": "Deangelo", "lastName": "Vickers" },
        { "id": 37, "firstName": "Josh", "lastName": "Porter" },
        { "id": 38, "firstName": "Cameron", "lastName": "Meyer" },
        { "id": 39, "firstName": "Diane", "lastName": "Hayes" },
        { "id": 40, "firstName": "Logan", "lastName": "Brooks" },
        { "id": 41, "firstName": "Vivian", "lastName": "Grant" }
    ]
};

const Task2 = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
        const endIndex = startIndex + RESULTS_PER_PAGE;

        setUsers(USERS_URL.results.slice(startIndex, endIndex));
    }, [currentPage]);

    const totalPages = Math.ceil(USERS_URL.count / RESULTS_PER_PAGE);

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
                <p>Page {currentPage} of {totalPages}</p>
            </div>
        </div>
    );
}

export default Task2;
