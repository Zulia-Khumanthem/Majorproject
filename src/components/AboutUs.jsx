import React from "react";
import '../components/AboutUs.css';
import Profiles from '../components/Profiles';
import './Navbar.css'
import '../components/AboutUs.css';

function AboutUs()
{
    const  team = [
        {
            name:"Kaspar Panmei",
            post:"Web Developer",
            contact:"+91-798223973",
            image: Profiles.Kaspar,
        },
        {
            name:"Themchuithot Zingkhai",
            post:"Web Designer",
            contact:"+91-798223973",
            image: Profiles.Themchuithot,
        },
        {
            name:"Zulia Khumanthem",
            post:"Content Writer",
            contact:"+91-798223973",
            image: Profiles.Zulia,
        }
    ];
    return(
        <div className="title" id="aboutUsScroll">
            <h1>Our <span>Team</span></h1>
            <div className="teamDisplay">
            {team.map((teamcontent, index) =>
            (
               <div key={index}className="teamcontent">
                <div className="teamheader">
                   <img src={teamcontent.image} alt="Profiles" />
                </div>
                <div className="teamdetails">
                   <h2>{teamcontent.name}</h2>
                   <h3>{teamcontent.post}</h3>
                   <h3>{teamcontent.contact}</h3>
                </div>
               </div> 
            ))}
        </div>
        </div>
    )
}

export default AboutUs;