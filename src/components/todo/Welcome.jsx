import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js';


function Welcome() {
    const [welcomeMessage, setWelcomeMessage] = useState("");

    const pathName = useLocation().pathname;

    function getName(pathName) {
        const name = pathName.substring(pathName.lastIndexOf('/') + 1);
        return name;
    }

    function retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
            .then(response => setWelcomeMessage(response.data))
            // .catch(alert("error with promise"));
    }

    function retrieveHelloWorldBean() {
        HelloWorldService.executeHelloWorldBeanService()
            .then(response => setWelcomeMessage(response.data.message))
            // .catch(alert("error with promise"));
    }

    function retrieveHelloWorldBeanWithPath() {
        const name = getName(pathName);
        HelloWorldService.executeHelloWorldBeanWithPathService(name)
            .then(response => setWelcomeMessage(response.data.message))
            // .catch(alert("error with promise"));
    }


    return (
        <>
            <h1>Welcome</h1>
            <div className="container">
                Welcome, {getName(pathName)}! You can manage your todos <Link to="/todos" >here.</Link>
            </div>
            <div className="container">
                <button onClick={retrieveWelcomeMessage} className="btn btn-success">Hello World</button>
                <button onClick={retrieveHelloWorldBean} className="btn btn-info">Hello World Bean</button>
                <button onClick={retrieveHelloWorldBeanWithPath} className="btn btn-danger">Hello World Bean with Path</button>
                <h2>{welcomeMessage}</h2>
            </div>
            
        </>
    )
}

export default Welcome;