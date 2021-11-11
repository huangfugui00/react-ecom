import React, { FC } from "react";
import { Route } from "react-router-dom";
import Home from '../pages/home/Home'
// FC<React.ComponentProps<typeof Route>>



const RouteRequiresLogin  = (props:React.ComponentProps<typeof Route>) => {
   const userIsLogged  = localStorage.getItem('token')

   return (
      <Route {...props}>{userIsLogged ? props.children : <Home/>}</Route>
   );
};

export default RouteRequiresLogin;