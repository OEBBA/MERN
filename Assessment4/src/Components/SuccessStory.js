import React from 'react';
var randomValue = Math.random();

const SuccessStory = () => {
    return (
        <div>
            <h3>Success Story</h3>
            <p>This is a success story.</p>
            <p>Number: {randomValue}</p>
        </div>
    );
};

export default SuccessStory;
