import React, {useState} from 'react'
import Login from './Login'

function TodoApp() {

    const [username, setUsername] = useState("in28minutes");
    const [password, setPassword] = useState("");

    return (
        <div className="TodoApp">
            My Todo Application
            <Login username={username} setUsername={setUsername} 
                   password={password} setPassword={setPassword}/>
        </div>
    )
}

export default TodoApp;