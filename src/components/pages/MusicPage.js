import React from 'react';
import { Link } from 'react-router-dom';
import './MusicPage.css';
import OtherWorks from '../imgs/other_works.png';
import Draggable from 'react-draggable';

const Music = () => {
    return (
        // <section id="musicLinks">
            <div className="music">
                <div>
                    <iframe className="bandCamp"
                        src="https://bandcamp.com/EmbeddedPlayer/album=2075576465/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/"
                        seamless><Link to="https://freddyboy.bandcamp.com/album/vignette002">Vignette002 by
                            freddyboy</Link></iframe>
                </div>
                <div>
                    <iframe className="bandCamp"
                        src="https://bandcamp.com/EmbeddedPlayer/album=3031003848/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
                        seamless><Link to="https://freddyboy.bandcamp.com/album/vignette001">Vignette001 by
                            freddyboy</Link></iframe>
                </div>
                <div>
                    <iframe className="bandCamp"
                        src="https://bandcamp.com/EmbeddedPlayer/track=2020648287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                        seamless><Link to="https://freddyboy.bandcamp.com/track/alright">alright by freddyboy</Link></iframe>
                </div>
                <div>
                    <Draggable axis="y">
                        <Link to="/otherworks" className="noDrag" style={{ position: 'absolute', bottom: '50px', right: '50px', cursor: 'grab' }}>
                            <img className="otherWorks noDrag" src={OtherWorks} />
                        </Link>
                    </Draggable>
                </div>
            </div>
        // </section>
    )
}
export default Music;