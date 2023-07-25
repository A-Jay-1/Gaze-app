import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="Navdiv">
            <ul className="nav-links">
                <li>
                    <a><Link to="/">Home</Link></a>
                </li>
                <li>
                    <a><Link to="/login">Login</Link></a>
                </li>
                <li>
                <a><Link to="/signup">SignUp</Link></a>
                </li>
              <li>
                <a><Link to="/accountsList">Accounts List</Link></a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;