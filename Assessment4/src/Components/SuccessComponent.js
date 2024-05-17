import React, { Component } from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory';
import UserSignIn from './UserSignIn';

class Success extends Component {
    render() {
        const quotes = [
            "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
            "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
            "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
            "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
            "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson"
        ];

        const name = "Otoi";
        const address = "123 Home Street";
        const successStory = <SuccessStory />


        return (
            <div>
                <h1>Success Quotes</h1>
                <ul>
                    {quotes.map((quote, index) => (
                        <li key={index}>{quote}</li>
                    ))}
                </ul>
                <SuccessChild name={name} address={address} successStory={successStory} />
                <UserSignIn />
            </div>
        );
    }
}

export default Success;
