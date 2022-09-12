import React, {useEffect} from 'react';
import Shape from '../imgs/landing.gif';
import './HomePage.css'; 
import Hover from 'react-3d-hover';

const Home = () => {
    return (
        <>
        <div class="columns is-centered">
            <Hover speed={300} perspective={3000} max={25}>
                <a href="https://linktr.ee/freddyboythings">
                    <img className="cover"src={Shape} />
                </a>
            </Hover>
        </div>
        {/* <a href="https://linktr.ee/freddyboythings">
            <p id="clickHere">CLICK TO LISTEN</p>
        </a> */}
        </>
    )
}

export default Home