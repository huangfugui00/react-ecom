import React, { FC } from "react";
import { Route } from "react-router-dom";
import Home from '../pages/home/Home'

const RouteRequiresLogin: FC<React.ComponentProps<typeof Route>> = props => {
   const userIsLogged  = localStorage.getItem('token')
   

   return (
      <Route {...props}>{userIsLogged ? props.children : <Home/>}</Route>
   );
};

export default RouteRequiresLogin;