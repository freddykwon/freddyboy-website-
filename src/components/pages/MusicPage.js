import React from 'react';
import { Link } from 'react-router-dom';
import './MusicPage.css';
import Vignette001 from '../imgs/vignette001.jpg';
import Vignette002 from '../imgs/vignette002.png';
import OnAndOn from '../imgs/onandon_single_art_final.png';
import Hobby from '../imgs/hobby_EP_Art_Final.png';

const Music = () => {
    return (
        // <section id="musicLinks">
        <div class="container text-center">
     
            <div class="row" id="vignette002Row">
                 <div class="col-sm-6 noPadding"> 
                    <img className="albumCovers" id="Hobby" src={Hobby} />
                </div>
                <div id="test" class="col-sm noPadding">
                    <iframe className="bandCamp"
                            src="https://bandcamp.com/EmbeddedPlayer/track=4139238664/size=large/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/"
                            seamless><Link to="https://freddyboy.bandcamp.com/track/on-and-on">On and On by freddyboy</Link>
                    </iframe>
                </div>
            </div>
           
            <div class="row" id="vignette002Row">
                 <div class="col-sm-6 noPadding"> 
                    <img className="albumCovers" id="vignette002" src={Vignette002} />
                </div>
                <div id="test" class="col-sm noPadding">
                    <iframe className="bandCamp"
                            src="https://bandcamp.com/EmbeddedPlayer/album=2075576465/size=large/bgcol=ffffff/linkcol=333333/artwork=none/transparent=true/"
                            seamless><Link to="https://freddyboy.bandcamp.com/album/vignette002">Vignette002 by freddyboy</Link>
                    </iframe>
                </div>
            </div>

            <div class="row">
                 <div class="col-sm noPadding"> 
                    <img className="albumCovers" id="vignette001" src={Vignette001} />
                </div>
                <div class="col-sm noPadding">
                    <iframe className="bandCamp"
                            src="https://bandcamp.com/EmbeddedPlayer/album=3031003848/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/"
                            seamless><Link to="https://freddyboy.bandcamp.com/album/vignette001">Vignette001 by freddyboy</Link>
                    </iframe>
                </div>
            </div>
         </div>
            // <div className="music">
            //     <div>
                    // <iframe className="bandCamp"
                    //     src="https://bandcamp.com/EmbeddedPlayer/album=2075576465/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/"
                    //     seamless><Link to="https://freddyboy.bandcamp.com/album/vignette002">Vignette002 by
                    //         freddyboy</Link></iframe>
            //     </div>
            //     <div>
                    // <iframe className="bandCamp"
                    //     src="https://bandcamp.com/EmbeddedPlayer/album=3031003848/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
                    //     seamless><Link to="https://freddyboy.bandcamp.com/album/vignette001">Vignette001 by
                    //         freddyboy</Link></iframe>
            //     </div>
            //     <div>
                    // <iframe className="bandCamp"
                    //     src="https://bandcamp.com/EmbeddedPlayer/track=2020648287/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    //     seamless><Link to="https://freddyboy.bandcamp.com/track/alright">alright by freddyboy</Link></iframe>
            //     </div>
            //     {/* <div>
            //         <Draggable axis="y">
            //             <Link to="/otherworks" className="noDrag" style={{ position: 'absolute', bottom: '50px', right: '50px', cursor: 'grab' }}>
            //                 <img className="otherWorks noDrag" src={OtherWorks} />
            //             </Link>
            //         </Draggable>
            //     </div> */}
            // </div>
        // </section>
    )
}
export default Music;