import React from "react";
import './Services.css';
import FooterGalleryPhoto from '../components/FooterGalleryPhoto.jsx';
import '../components/Navbar.css';

function Services()
{
    return(
        <div className="services-content">
            <div className="flexcontainer">
            <div className="newcontainer">
            <img src={FooterGalleryPhoto.servicesimage1} alt="" />
                    <div className="contents">
                        <h2>Qualified Employees</h2>
                        <p>Our team consists of more than 20 qualified and experienced real estate brokers and property managers ready to help you.</p>
                    </div>
            </div>
            <div className="newcontainer">
                <img src={FooterGalleryPhoto.servicesimage2} alt="" />
                    <div className="contents">
                        <h2><span></span>Free Consultations</h2>
                        <p>Our acquaintance with a client always begins with a free consultation to find out what kind of property they are looking for.</p>
                    </div>
            </div>
            <div className="newcontainer">
                <img src={FooterGalleryPhoto.servicesimage3} alt="" />
                    <div className="contents">
                        <h2><span></span>100% Guaranteed</h2>
                        <p>Our team consists of more than 20 qualified and experienced real estate brokers and property managers ready to help you.</p>
                    </div>
            </div>
    </div>
        </div>
    )
};
 export default Services;