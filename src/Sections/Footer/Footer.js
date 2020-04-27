import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../Styles/Footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <p>© 2020 Jason Ujma-Alvis. All rights reserved. Cookie Policy.</p>
            <p>Designed and built by me, data provided by TMDb.</p>
            <span className="footer-span">
                <FontAwesomeIcon icon={faTwitter}/>   
                <FontAwesomeIcon icon={faGithub}/> 
                <FontAwesomeIcon icon={faLinkedin}/>          
            </span>
        </div>
    )
}

export default Footer;