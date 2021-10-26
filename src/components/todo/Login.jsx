import { useState } from 'react'

function Login({ username, setUsername, password, setPassword }) {
    
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    function loginClicked() {
        if (username == "in28minutes" && password == "dummy") {
            console.log("Successful login")
            setHasLoginFailed(false);
            setShowSuccessMessage(true);
        } else {
            console.log("Login failed")
            setHasLoginFailed(true);
            setShowSuccessMessage(false);
        }
    }
    
    return (
        <div>
            <div hidden={!hasLoginFailed}>Invalid Credentials</div>
            <div hidden={!showSuccessMessage}>Login Successful</div>
            Username: <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={loginClicked}>Login</button>
        </div>
    )
}

export default Login;