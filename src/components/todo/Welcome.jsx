import { useState } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';
import AuthenticationService from '../session/AuthenticationService'

function Welcome() {
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    let username = AuthenticationService.getLoggedInUsername();

    function retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
            .then(response => setWelcomeMessage(response.data))
    }

    function retrieveHelloWorldBean() {
        HelloWorldService.executeHelloWorldBeanService()
            .then(response => setWelcomeMessage(response.data.message))
    }

    function retrieveHelloWorldBeanWithPath() {
        HelloWorldService.executeHelloWorldBeanWithPathService(username)
            .then(response => {
                setWelcomeMessage(response.data.message);
            })
            .catch(error => {
                setErrorMessage(error.response.data.message);
                setWelcomeMessage("");
            })
    }


    return (
        <>
            <h1>Welcome</h1>
            <div className="container">
                Welcome, {username}! You can manage your todos <Link to={`/todos/${username}`}>here.</Link>
            </div>
            <div className="container">
                <button onClick={retrieveWelcomeMessage} className="cateButton btn btn-success">Hello World</button>
                <button onClick={retrieveHelloWorldBean} className="cateButton btn btn-info">Hello World Bean</button>
                <button onClick={retrieveHelloWorldBeanWithPath} className="cateButton btn btn-danger">Hello World Bean with Path</button>
                <h2>{welcomeMessage}</h2>
                <h2 hidden={welcomeMessage}>{errorMessage}</h2>
            </div>
            
        </>
    )
}

export default Welcome;