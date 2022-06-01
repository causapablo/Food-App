import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>

            Nav bar
            <br></br>
            <Link to={"/home"}>Home</Link>

        </div>
    );
}

export default Nav;