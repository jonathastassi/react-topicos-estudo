import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import { AuthContextType } from '../../contexts/AuthContextType';

const PrivateRoute: React.FC<{
    children: any;
    path: string;
}> = ({ children, ...rest }) => {

    let auth = useContext<AuthContextType>(authContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user !== "" ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}

export default PrivateRoute;