import { useLocation, Link } from 'react-router-dom';

function Welcome() {
    const pathName = useLocation().pathname;

    function getName(pathName) {
        const name = pathName.substring(pathName.lastIndexOf('/') + 1);
        return name;
    }

    return (
        <div>Welcome, {getName(pathName)}! You can manage your todos <Link to="/todos" >here.</Link>
            
        </div>
    )
}

export default Welcome;