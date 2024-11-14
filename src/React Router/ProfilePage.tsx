import React from 'react';
import {useParams} from "react-router-dom";

export const ProfilePage = () => {
    const params = useParams<{ profileId: string }>()
    return (
        <div>
            <h1 >Profile Page {params.profileId}</h1>
        </div>
    );
};
