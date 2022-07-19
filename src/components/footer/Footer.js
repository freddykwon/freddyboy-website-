import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSpotify, faBandcamp, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import './footer.css'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p className="socialBar">
                    <a href="https://www.instagram.com/freddyboythings/" target="_blank">
                        <FontAwesomeIcon className="socials" icon={faInstagram} />
                    </a>
                    <a href="https://open.spotify.com/artist/26PRP43YrFQF1Z2nk52OXj?si=0PzZNyZyR86pHbsmEpKN7g" target="_blank">
                        <FontAwesomeIcon className="socials" icon={faSpotify} />
                    </a>
                    <a href="https://freddyboy.bandcamp.com/" target="_blank">
                        <FontAwesomeIcon className="socials" icon={faBandcamp} />
                    </a>
                    <a href="https://soundcloud.com/freddyboythings" target="_blank">
                        <FontAwesomeIcon className="socials" icon={faSoundcloud} />
                    </a>
                </p>
            </div>
        </footer>
    )
}
export default Footer;


