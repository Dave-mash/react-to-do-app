import React from 'react';
import { Link } from 'react-router-dom';


const header = () => (
    <header>
        <Link to="/" className="page-link">
            <h1>Twitter clone</h1>
        </Link>
        <Link to="/about" className="page-link about-page-link">About</Link>
    </header>
);

export default header;