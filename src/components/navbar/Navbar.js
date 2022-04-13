import React from 'react';
import FreddyboyLogo from '../imgs/freddyboylogo.png';
import FreddyboyGif from '../imgs/fb_logo.gif'
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar is-transparent">
            <div id="navBarResp" className="navbar-brand">
                <Link to="/">
                    <img id="fbLogo" className="static" src={FreddyboyLogo} alt="freddyboy" />
                    <img id="fbgif" className="active" src={FreddyboyGif} alt="freddyboy gif" />
                </Link>
                <div className="navbar-burger" data-target="navbar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbar" className="navbar-menu">

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <Link id="musicNav" className="navOptions" to="/music">Music</Link>
                            </p>
                            <p className="control">
                                <Link className="navOptions" to="/merch">Merch</Link>
                            </p>
                            <p className="control">
                                <Link className="navOptions" to="/contact">Contact</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;