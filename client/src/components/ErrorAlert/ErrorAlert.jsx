import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loading } from "../../redux/actions/actionsCreators";
import imgError from "../../assets/Error image.jpg";
import "./ErrorAlertSyles.css";

export function ErrorAlert({ msg = "Error. Return to home.", code }) {
    const dispatch = useDispatch();

    function handleGoHome() {
        dispatch(loading(true));
    }

    return (
        <div class="error_container">
            <img class="gifPikachu" src={imgError} alt="img error" />
            <span class="errorCode">{code}</span>
            <p class="error">Error</p>
            <span class="spanError">{msg}</span>
            <div onClick={handleGoHome()}>
                <Link to="/recipes/">
                    <button class="btn-goHome">Go to the main page.</button>
                </Link>
            </div>
        </div>
    );
}