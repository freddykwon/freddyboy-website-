import React from 'react';
import Shape from '../imgs/main_shape.png'

const Home = () => {
    return (
        <div class="columns is-centered">
            <section class="section">
                <figure id="mainShape">
                    <img src={Shape} />
                </figure>
            </section>
        </div>
    )
}

export default Home