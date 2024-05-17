import React from 'react';

const SuccessChild = ({ name, address, successStory }) => {
    return (
        <div>
            <h2>Success Child Component</h2>
            <p>Name: {name}</p>
            <p>Address: {address}</p>
            {successStory}
        </div>
    );
};

export default SuccessChild;
