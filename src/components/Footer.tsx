import React from 'react';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../context/AppContex";
const Footer = () => {
    const appState = useContext(AppContext);
    return (
        <div>
            <p>Copyright &copy; 2021, {appState.firstName}</p>
            <Link to={"/about"}>About</Link>
        </div>
    );
};

export default Footer;
