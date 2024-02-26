import React from "react";
import '../components/Navbar.css';
import '../components/Hero.css';
import '../components/Navbar.css';
import FooterGalleryPhoto from './FooterGalleryPhoto'

function Hero()
{
    return(
        <section className="heroclass">
            <div className="imageBackground">
                <div className="headercontent">
                    <p><span></span></p>
                    <h2>Offering <span>Diverse</span></h2>
                </div>
                <div className="headersecondcontent">
                   <h1>P<span>r</span>operties</h1>
                   <p>inHouse provides you with lots of great properties throughout Manipur so that you could easily choose your dream property</p>
                </div>
                <div className="btn-hero">
                <button className="Herobtn">
                    <a href="../components/Properties">View Properties</a>
                </button>
                </div>
            </div>
            <div className="fixedcontact-icon">
                <a href="https://chatwith.io/s/7982239573">
                <img src={FooterGalleryPhoto.socialimage4} alt="Whatsapp" />
                </a>
            </div>
        </section>
    )
}

export default Hero;