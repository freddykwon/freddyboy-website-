import React from 'react';
import './OtherWorks.css';
import bandWorkLogo from '../imgs/bandwork.png';
import filmWorkLogo from '../imgs/composerwork.png';

const SideWork = (props) => {
    return (
        <div className="allWorks">
            <div>
                <img src={bandWorkLogo} className="logo"></img>
                <table className="table borderless" id="cvTable">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Release</th>
                            <th scope="col">Credit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="content">
                            <td>2016</td>
                            <td><a href="https://open.spotify.com/album/6TIeg8P9mLyEWKjqqpHDOf?si=a-Mzrz-yR_-Kkoqmw9sKFg">The Kents - Waking EP</a></td>
                            <td>Guitar, Vocals </td>
                        </tr>
                        <tr className="content">
                            <td>2017</td>
                            <td><a href="https://open.spotify.com/album/0MOLR0LytseDZzHL21nU1R?si=CIL0LjY_TFqOnoIeeuRvzA">The Kents - Within Waves</a></td>
                            <td>Guitar, Vocals </td>
                        </tr>
                        <tr className="content">
                            <td className="a">2020</td>
                            <td className="a"><a href="https://open.spotify.com/album/5csu0lfvXvFxnZl4hhP0zy?si=DgnBV1XFSACWumqYvl96WQ"> Heaps - What is Heaps</a></td>
                            <td>Guitar, Vocals, <br /> Synths, Keys, OP-1 Production </td>
                        </tr>
                        <tr className="content">
                            <td className="a">2022</td>
                            <td className="a"><a href="https://soundcloud.com/heapsband/sets/little-blue/s-E5yZoCClDLs?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"> Heaps - Little Blue </a></td>
                            <td> Production, Guitar, <br /> Synths, OP-1 Production </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <img src={filmWorkLogo} className="logo"></img>
                <table className="table borderless" id="cvTable">
                    <thead>
                        <tr className="content">
                            <th scope="col"></th>
                            <th scope="col">Release</th>
                            <th scope="col">Credit</th>
                        </tr>
                    </thead >
                    <tbody>
                        <tr className="content">
                            <td>2019</td>
                            <td><a href="https://www.youtube.com/watch?v=OEbjXmGFCmc&ab_channel=CBCArts">CBC Arts: The Art in Nature</a></td>
                            <td>Composer</td>
                        </tr>
                        <tr className="content"> 
                            <td>2019</td>
                            <td><a href="https://vimeo.com/354279964">love_is</a></td>
                            <td>Additional Instrumentation</td>
                        </tr>
                        <tr className="content">
                            <td>2019</td>
                            <td><a href="https://vimeo.com/345529830"> Journeys in Motherhood: <br />The Safe Motherhood Research Project</a></td>
                            <td className="a">Composer</td>
                        </tr>
                        <tr className="content">
                            <td>2020</td>
                            <td><a href="https://www.youtube.com/watch?v=cGdmZ9I7D5w&ab_channel=Mejuri"> Mejuri's Summer <br />Forever Campaign </a></td>
                            <td>Composer</td>
                        </tr>
                        <tr className="content">
                            <td>2022</td>
                            <td>Ultraviolet (Short Film)</td>
                            <td>Composer</td>
                        </tr>
                        <tr className="content">
                            <td>2022</td>
                            <td><a href="https://www.youtube.com/watch?v=ABuOlpgnqSU"> Between Friends (Short Film) </a></td>
                            <td>Composer</td>
                        </tr>
                    </tbody>
                </table >
            </div >
        </div >
    )
}

export default SideWork;