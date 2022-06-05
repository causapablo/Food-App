import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import imgLanding from "../../assets/DetailBackground.jpg";

export function LandingPage() {
    return (
        <div className="landing-container">
            <img className="img" src={imgLanding} alt="" />
            <Link to="/recipes/">
                <button className="btn">
                    LET'S COOK
                    <p>Click me!</p>
                </button>
            </Link>
        </div>
    );
}