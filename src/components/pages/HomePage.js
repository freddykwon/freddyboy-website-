import React, {useEffect} from 'react';
import Shape from '../imgs/Asset 30.png'
import './HomePage.css'; 
import Hover from 'react-3d-hover';

const Home = () => {
    return (
        <div class="columns is-centered">
            <Hover speed={500} perspective={800} max={25}>
                <a href="https://linktr.ee/freddyboythings" target="_blank">
                    <img className="cover"src={Shape} />
                </a>
            </Hover>
        </div>
    )
}

export default Home