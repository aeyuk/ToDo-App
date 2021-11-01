import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../session/Login';
import Welcome from './Welcome';
import Error from './Error';
import TodoList from './TodoList';
import Logout from '../session/Logout';
import Header from '../style/Header';
import Footer from '../style/Footer';
import AuthenticatedRoute from '../session/AuthenticatedRoute';

// import AuthenticationService from './AuthenticationService.js';


function TodoApp() {
    return (
        <div className="TodoApp">
            <Router>
                <>
                    <Header/>
                        <Switch>
                            <Route path="/" exact component={Login}></Route>
                            <Route path="/login" exact component={Login}/>
                            <AuthenticatedRoute path="/welcome/:username" exact component={Welcome}/> 
                            <AuthenticatedRoute path="/todos/:username" exact component={TodoList}/>
                            <AuthenticatedRoute path="/logout" exact component={Logout}/>          
                            <Route component={Error}/>                           
                        </Switch>
                    <Footer/>
                </>
            </Router>
        </div>
    )
}

export default TodoApp;