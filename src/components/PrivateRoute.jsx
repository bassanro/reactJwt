import { Redirect, Route } from "react-router";
import { authenticationService } from "../services/auth.service";
import  React, { Component } from  "react";

export const PrivateRoute = ({ ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)