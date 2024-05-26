import React from 'react';
import './Header.css'
import { Link,NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/posts">posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;