import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticatedService from './AuthenticationService.js';

export default class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticatedService.isUserLoggedIn()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login"/>
        }
    }
}