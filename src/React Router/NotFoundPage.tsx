import React from 'react';
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop:'100px', fontSize:'45px', flexDirection:'column'}}>
            404 Not Found
            <Link to="/">Home from link</Link>
        </div>

    );
};
