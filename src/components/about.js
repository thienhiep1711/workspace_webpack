import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './layout/contactList.js';


let contacts = [
    {
        name:'Hiệp',
        phone:'0915280986',
    },
    {
        name:'Tuấn',
        phone:'0979465986'
    },
     {
        name:'Tầng',
        phone:'0979465987'
    },
     {
        name:'Đông',
        phone:'0979465989'
    },
     {
        name:'Nam',
        phone:'0979465980'
    },
]

class Abouts extends Component {
    render() {
        return (
            <div>
                <h1>Abouts list</h1>
                <ContactList contacts={this.props.contacts}/>
            </div>
        );
    }
}

ReactDOM.render(<Abouts contacts={contacts}/>,document.getElementById('abouts'))