import { useLocation, Link } from 'react-router-dom';
import AuthenticationService from '../session/AuthenticationService.js';
import { withRouter } from 'react-router';

function Header() {

    const pathName = useLocation().pathname;
    const username = pathName.substring(pathName.lastIndexOf('/') + 1);   

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <a href="https://www.in28minutes.com" className="navbar-brand">in28Minutes</a>
                </div>
                <ul className="navbar-nav">
                    {isUserLoggedIn && <li className="nav-link"><Link to={`/welcome/${username}`}>Home</Link></li>}
                    {isUserLoggedIn && <li className="nav-link"><Link to={`/todos/${username}`}>Todo List</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-link"><Link to="/login">Login</Link></li>
                    {isUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Header);