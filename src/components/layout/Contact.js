import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                 <li>{this.props.contacts.name} , {this.props.contacts.phone}</li>
            </div>
        );
    }
}

export default Contact;