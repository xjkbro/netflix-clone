import React from "react";
import "./Nav.css";

function Nav() {
    return (
        <div className="nav nav_black">
            <div className="nav_contents">
                <img
                    className="nav_logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                />
                <img
                    className="nav_avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                />
            </div>
        </div>
    );
}

export default Nav;
