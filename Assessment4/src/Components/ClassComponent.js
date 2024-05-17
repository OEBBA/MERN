import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('Component Created');

        this.state = {
            value: '',
        };
    }

    componentDidMount() {
        console.log('Added');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updated');
    }

    componentWillUnmount() {
        console.log('Removed');
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        });
    };

    render() {
        console.log('Rendering Component');
        return (
            <div>
                <h2>Lifecycle Component</h2>
            </div>
        );
    }
}

export default ClassComponent;
