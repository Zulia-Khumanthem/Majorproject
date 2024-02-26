import React from 'react';
import '../components/Topheader.css';
import Call from '../images/telephone.png';
import Location from '../images/location.png';
import '../components/Topheader.css';
import '../components/Navbar.css';
function Topheader()
{
    return(
        <div className="fixedcontent">
            <div className="header">
            <div className="callUs">
                <img src={Call} alt="Phone" />
                <p><a href="tel:7982239573">7982239573</a></p>
            </div>
            <div className="location">
                <img src={Location} alt="Location" />
                <p>Takyelpat,795004</p>
            </div>
            <div className="requestcallbtn">
                <button>
                    <a href="mailto:kasparpanmeibboy@gmail.com">Mail Us</a>
                    
                </button>
            </div>
        </div>
        </div>
        
    )
}

export default Topheader;