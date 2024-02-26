import React from "react";
import './Navbar.css';
import './Footer.css';
import FooterGalleryPhoto from '../components/FooterGalleryPhoto.jsx';
function Footer()
{
    return(
        <div className="footer" id="footer">
            <div className="flex-content">
                <div className="aboutus">
                    <h3><span>About Us</span></h3>
                    <p>inHouse is the largest full-service real estate and property management company. We offer expertise in the marketing and sale of a wide range of properties, including residential real estate, farms and lifestyle blocks, as well as commercial and industrial properties that we hope may interest you.</p>
                </div>
                <div className="recentblog">
                    <h3><span>Recent Blog Posts</span></h3>
                    <p>Real Estate Guide: 7 Important Tips for Buying a Home</p>
                    <p>by Mike Barnes - 2 days ago</p>
                    <p>Single-Family Homes as a Housing Option for Young Families</p>
                    <p>by Mike Barnes - 2 days ago</p>
                </div>
            </div>
            <div className="gallery">
                    <h3><span>Gallery</span></h3>
                    <div className="flex-gallery">
                    <div className="flex-first-column">
                        <img src={FooterGalleryPhoto.image1} alt="" />
                        <img src={FooterGalleryPhoto.image2} alt="" />
                        <img src={FooterGalleryPhoto.image3} alt="" />
                        <img src={FooterGalleryPhoto.image4} alt="" />
                    </div>
                    <div className="flex-first-column">
                        <img src={FooterGalleryPhoto.image5} alt="" />
                        <img src={FooterGalleryPhoto.image6} alt="" />
                        <img src={FooterGalleryPhoto.image7} alt="" />
                        <img src={FooterGalleryPhoto.image8} alt="" />
                    </div>
                    </div>
                </div>
            <div className="quicklinks">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#aboutUsScroll">About Us</a></li>
                    <li><a href="#properties">Properties</a></li>
                    <li><a href="#footer">Blog</a></li>
                    <li><a href="#Offers">Pages</a></li>
                    <li><a href="#ContactUs">Contact</a></li>
                </ul>
                <div className="social-links">
                    <div className="icon">
                        <a href="https://www.facebook.com/profile.php?id=100075168122325" target="_blank" without rel="noreferrer" >
                        <img src={FooterGalleryPhoto.socialimage1} alt="Facebook" />
                        </a>
                    </div>
                    <div className="icon">
                       <a href="https://www.instagram.com/_kaspar_panmei_/?hl=en" target="_blan k" without rel="noreferrer" >
                       <img src={FooterGalleryPhoto.socialimage2} alt="" />
                       </a>
                    </div>
                    <div className="icon">
                        <a href="https://twitter.com/kaspar_panmei" target="_blank" rel="noreferrer">
                        <img src={FooterGalleryPhoto.socialimage3} alt="" />
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className="copyright">
                <p>&copy;  2024, High Tech Ltd.</p>
            </div>
        </div>
    )
};

export default Footer;