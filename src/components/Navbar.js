import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';

import "../css/navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li><Link to ="/">Byte Lab</Link></li>
                    <li><Link to ="/code">Code</Link></li>
                    <li>Sprites</li>
                    <li>Maps</li>
                    <li>Play</li>
                </ul>
            </nav>
        );
    }   
}   

export default inject(stores => {})(Navbar);