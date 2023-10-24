import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer>
            <div className="footerButton">
                <Link to="/signup">
                    {" "}
                    <button className="buttonStyleFooter">
                        Sign up today!!
                    </button>
                </Link>
            </div>
        </footer>
    );
}
