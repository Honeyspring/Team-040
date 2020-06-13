/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TOKEN } from '../../constants/APIConfig';

/**
 * SECURE ROUTER COMPONENT
 */
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={
            (props) => {
                if (TOKEN.test(document.cookie)) {
                  return <Component {...props} />;
                }
                    return <Redirect to={
                       {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                       }
                    } 

                    />;
                
            }
        } 

        />
            
    );
};

export default ProtectedRoute;