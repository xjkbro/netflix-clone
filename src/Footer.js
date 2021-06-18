import React from "react";
import "./Footer.css";
import {
    Facebook,
    Instagram,
    YouTube,
    LinkedIn,
    Twitter,
} from "@material-ui/icons";

function Footer() {
    return (
        <div className="footer_container">
            <div className="socialButtons">
                <Facebook fontSize="Large" />
                <Instagram fontSize="Large" />
                <Twitter fontSize="Large" />
                <LinkedIn fontSize="Large" />
                <YouTube fontSize="Large" />
            </div>
            <ul className="footer_left">
                <li>
                    <a>Audio and Subtitles</a>
                </li>
                <li>
                    <a>Media Center</a>
                </li>
                <li>
                    <a>Privacy</a>
                </li>
                <li>
                    <a>Contact Us</a>
                </li>
            </ul>
            <ul className="footer_middleLeft">
                <li>
                    <a>Audio Description</a>
                </li>
                <li>
                    <a>Investor Relations</a>
                </li>
                <li>
                    <a>Legal Notices</a>
                </li>
            </ul>
            <ul className="footer_middleRight">
                <li>
                    <a>Help Center</a>
                </li>
                <li>
                    <a>Jobs</a>
                </li>
                <li>
                    <a>Cookie Preferences</a>
                </li>
            </ul>
            <ul className="footer_right">
                <li>
                    <a>Gift Cards</a>
                </li>
                <li>
                    <a>Terms of Use</a>
                </li>
                <li>
                    <a>Corporate Information</a>
                </li>
            </ul>
            <p className="copyright">© 1995-2021 jkdelara - Netflix Clone </p>
        </div>
    );
}

export default Footer;
