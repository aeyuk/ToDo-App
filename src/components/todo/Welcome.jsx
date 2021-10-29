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

    return (
        <>
            <h1>Welcome</h1>
            <div className="container">
                Welcome, {getName(pathName)}! You can manage your todos <Link to="/todos" >here.</Link>
            </div>
            <div className="container">
                Click here to get a customized welcome message:
                <div>
                    <button onClick={retrieveWelcomeMessage} className="btn btn-success">Click me!</button>
                </div>
                <div>
                    {welcomeMessage}
                </div>
            </div>
            
        </>
    )
}

export default Welcome;