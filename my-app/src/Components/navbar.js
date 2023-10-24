import { Link } from "react-router-dom";
import logout from "../utils/logout";
import useUser from "../hooks/useUser";

const NavBar = () => {
    const { user } = useUser();

    return (
        <div className="Navdiv">
            <ul className="nav-links">
                <li>
                    <a>
                        <Link to="/">Home</Link>
                    </a>
                </li>
                {!user && (
                    <>
                        <li>
                            <a>
                                <Link to="/login">Login</Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/signup">SignUp</Link>
                            </a>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <a>
                                <Link to="/accountsList">Accounts List</Link>
                            </a>
                        </li>
                        <li>
                            <a style={{ cursor: "pointer" }} onClick={logout}>
                                Logout
                            </a>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default NavBar;
