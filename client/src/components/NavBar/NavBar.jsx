import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CuisineLogo from "../../assets/CuisineLogo.jpg";

export function NavBar(){
    return (
        <div class="nav-container">
            <nav>
                <div class="all-li">
                    <Link to="/recipes/" style={{ textDecoration: "inherit" }}>
                        <li class="link-route">Home</li>
                    </Link>
                    <Link to="/create" style={{ textDecoration: "inherit" }}>
                        <li class="link-route">Create</li>
                    </Link>
                </div>
                <div class="branding">
                    <img class="logo-cuisine" src={CuisineLogo} alt="Cuisine App Logo" />
                </div>
                <div class="search-container">
                    <SearchBar />
                </div>
            </nav>
        </div>
    );
}


// import React from 'react';
// import {Link} from "react-router-dom";
//
// function Nav() {
//     return (
//         <div>
//
//             Nav bar
//             <br></br>
//             <Link to={"/home"}>Home</Link>
//
//         </div>
//     );
// }
//
// export default Nav;