import React from 'react';
import InstagramPic from '../imgs/instagram.png';
import SpotifyPic from '../imgs/spotify.png';
import ApplePic from '../imgs/apple.png';
import SoundcloudPic from '../imgs/soundcloud.png'
import BandcampPic from '../imgs/bandcamp.png'

import './footer.css'

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <a href="https://www.instagram.com/freddyboythings/" target="_blank">
                        <img className="socials" src={InstagramPic} alt="spotify logo" />
                    </a>
                    <a href="https://open.spotify.com/artist/26PRP43YrFQF1Z2nk52OXj?si=0PzZNyZyR86pHbsmEpKN7g" target="_blank">
                        <img className="socials" src={SpotifyPic} alt="spotify logo" />
                    </a>
                    <a href="https://music.apple.com/ca/artist/freddyboy/1498472185" target="_blank">
                        <img className="socials" src={ApplePic} alt="apple music logo" />
                    </a>
                    <a href="https://soundcloud.com/freddyboythings" target="_blank">
                        <img className="socials" src={SoundcloudPic} alt="soundcloud logo" />
                    </a>
                    <a href="https://freddyboy.bandcamp.com/" target="_blank">
                        <img className="socials" src={BandcampPic} alt="bandcamp logo" />
                    </a>
                </p>
            </div>
        </footer>
    )
}
export default Footer;