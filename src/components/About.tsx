import React, {useContext} from 'react';
import {AppContext} from "../context/AppContex";
import {Link} from "react-router-dom";

const About = () => {
    const appState = useContext(AppContext);
    return (
        <div>
            <h1>User: {appState.jwt}</h1>
            <button onClick={() => appState.setAuthInfo("dsad321","Word","LastWord","user")}>change value</button>
            <Link to={"/"}>Go Back</Link>

        </div>
    );
};

export default About;
