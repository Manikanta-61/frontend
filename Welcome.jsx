import React, { Component as Mybase } from 'react';
class Welcome extends Mybase {
    render() {
        return (
        <div>
            <h1>Hello, {this.props.name}!</h1>
            <p>This is a Class Components.</p>
        </div>
        );
    }
}
export default Welcome;