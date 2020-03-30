import React from "react";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName="active" to="/todolist">TODOLIST</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar