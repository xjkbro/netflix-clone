import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) handleShow(true);
        else handleShow(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <a href="/">
                    <img
                        className="nav_logo"
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    />
                </a>
                <ul className="nav_links">
                    <li className="nav_link">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav_link">TV Shows</li>
                    <li className="nav_link">Movies</li>
                    <li className="nav_link">My List</li>
                </ul>
                <img
                    className="nav_avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                />
            </div>
        </div>
    );
}

export default Nav;
