import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("cate");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function loginClicked() {
        if (username === "cate" && password === "dummy") {
            console.log("Successful login")
            history.push(`/welcome/${username}`);
            // setHasLoginFailed(false);
            // setShowSuccessMessage(true);
        } else {
            console.log("Login failed")
            // setHasLoginFailed(true);
            // setShowSuccessMessage(false);
        }
    }
    
    return (
        <div>
            {/* <div hidden={!hasLoginFailed}>Invalid Credentials</div> */}
            {/* <div hidden={!showSuccessMessage}>Login Successful</div> */}
            Username: <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={loginClicked}>Login</button>
        </div>
    )
}

export default Login;