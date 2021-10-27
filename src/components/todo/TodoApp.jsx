import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';
import TodoList from './TodoList';

import Header from '../style/Header';
import Footer from '../style/Footer'


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
                            <Route component={Error}/>                           
                        </Switch>
                    <Footer/>
                </>
            </Router>
        </div>
    )
}

export default TodoApp;