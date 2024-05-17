import React, { Component } from 'react';

class UserSignIn extends Component {
    constructor(props) {
        super(props);
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const username = this.usernameInput.current.value;
        const password = this.passwordInput.current.value;
        console.log('Username:', username);
        console.log('Password:', password);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>
                <div>
                    <label>
                        Username:
                        <input type="text" ref={this.usernameInput} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" ref={this.passwordInput} />
                    </label>
                </div>
                <button type="submit">Sign In</button>
            </form>
        );
    }
}

export default UserSignIn;
