import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header({handleChange, searchTerm, handleSubmit}) {
    return (
            <div className="header">
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo">GoogleBooksAPI</label>
                    <ul>
                        <li className="search-box">
                            <form onSubmit={handleSubmit}>
                                <input id="inp" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleChange}/>
                            </form>
                        </li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                    </ul>
                </nav>
            </div>
    )
}

export default Header

// <input type="search" placeholder="Search.."/>
