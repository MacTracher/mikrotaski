import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";

export const ProfilesPage = () => {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <div style={{display: 'flex'}}>
            <div>
                {profiles.map((profile) => (
                    <NavLink style={({isActive})=>{
                        return isActive ? {display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: '45px',
                            flexDirection: 'column',
                            color:'red'} : {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: '45px',
                                flexDirection: 'column',}
                    }} key={profile} to={`/profiles/${profile}`}>
                        Profile: {profile}
                    </NavLink>

                ))}
                <Link to={`/`}>Home Page</Link>
            </div>
            <Outlet/>
        </div>

    );
};
