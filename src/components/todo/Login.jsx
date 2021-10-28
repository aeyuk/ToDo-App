import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

function Login() {
    const [username, setUsername] = useState("cate");
    const [password, setPassword] = useState("");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);

    const history = useHistory();

    function loginClicked() {
        if (username === "cate" && password === "dummy") {
            AuthenticationService.registerSuccessfulLogin(username, password);
            history.push(`/welcome/${username}`);
            setHasLoginFailed(false);
        } else {
            setHasLoginFailed(true);
        }
    }
    
    return (
        <div>
            <h1>Login</h1>
            <div className="container">
                {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                Username: <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="btn btn-success" onClick={loginClicked}>Login</button>
            </div>
        </div>
    )
}

export default Login;