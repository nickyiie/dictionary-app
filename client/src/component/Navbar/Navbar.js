import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <Link exact to = '/'>main page</Link>
        </div>
    );
}

export default Navbar;