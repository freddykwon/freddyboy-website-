import React from 'react';
import Shape from '../imgs/onAndOnExample-01.png'
import './HomePage.css';

const Home = () => {
    return (
        <div class="columns is-centered">
            <section class="section">
                <figure id="mainShape">
                    <img id="cover" src={Shape} />
                </figure>
            </section>
        </div>
    )
}

export default Home