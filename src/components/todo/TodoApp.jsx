import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';
import TodoList from './TodoList';
import Logout from './Logout';

import Header from '../style/Header';
import Footer from '../style/Footer';

import AuthenticationService from './AuthenticationService.js';


function TodoApp() {
    return (
        <div className="TodoApp">
            <Router>
                <>
                    <Header/>
                        <Switch>
                            <Route path="/" exact component={Login}></Route>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/welcome/:name" exact component={Welcome}/> 
                            <Route path="/todos" exact component={TodoList}/>
                            <Route path="/logout" exact component={Logout}/>          
                            <Route component={Error}/>                           
                        </Switch>
                    <Footer/>
                </>
            </Router>
        </div>
    )
}

export default TodoApp;