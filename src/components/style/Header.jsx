import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <a href="https://www.in28minutes.com" className="navbar-brand">in28Minutes</a>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-link"><Link to="/welcome/cate">Home</Link></li>
                    <li className="nav-link"><Link to="/todos">Todo List</Link></li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-link"><Link to="/login">Login</Link></li>
                    <li className="nav-link"><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;