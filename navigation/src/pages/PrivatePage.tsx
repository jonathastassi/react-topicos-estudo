import React, { useContext } from 'react';
import { authContext } from '../contexts/AuthContext';
import { AuthContextType } from '../contexts/AuthContextType';

const PrivatePage = () => {
    const auth = useContext<AuthContextType>(authContext);

    return (
        <React.Fragment>
            <h1>private page</h1>
            <h4>{auth.user}</h4>
        </React.Fragment>
    )
}

export default PrivatePage;