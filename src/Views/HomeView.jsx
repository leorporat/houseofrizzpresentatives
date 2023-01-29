import {Link, useMatch, useResolvedPath} from "react-router-dom"

function HomeView() {
    return (
        <div className='home-selections'>
            <Link to='/guys' id='guys'>Guys</Link>
            <Link to='/girls' id='girls'>Girls</Link>
        </div>
    )
}

function SetActiveRoute({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    ); 
}

export default HomeView