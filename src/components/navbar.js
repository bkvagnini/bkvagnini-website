import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className = "navbar-container">
                    <Link to="/" className = "navbar-logo">Home</Link> |&nbsp; 
                    <Link to="/aboutMe" className = "navbar-logo">About Me</Link> |&nbsp; 
                    <Link to="/graphicDesign" className = "navbar-logo">Graphic Design</Link> |&nbsp;
                    <Link to="/webDesign" className = "navbar-logo">Web Design</Link> |&nbsp;
                    <Link to="/productMgmt" className = "navbar-logo">Product Management</Link> |&nbsp;
                    <Link to="/techWriting" className = "navbar-logo">Technical Writing</Link> |&nbsp;
                    <Link to="/resume" className = "navbar-logo">Resumes</Link> |&nbsp;
                    <Link to="/contactMe" className = "navbar-logo">Contact Me</Link>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
