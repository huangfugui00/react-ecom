import React from "react";
import { Route, Redirect } from "react-router-dom";

const RouteRequiresLogin = ({ component: Component, ...rest }) => {
     const auth  = localStorage.getItem('token')
    return(
        <Route {...rest} render={(props) => (
            auth 
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default RouteRequiresLogin;