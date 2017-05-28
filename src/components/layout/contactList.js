import React, { Component } from 'react';
import Contact from './Contact'

class ContactList extends Component {
    render() {
        console.log(this.props.contacts);
        return (
          <ul>
                {this.props.contacts.map((contact) => {
                return <Contact contact={contact}/>
            })}
         
          </ul>
        );
    }
}

export default ContactList;