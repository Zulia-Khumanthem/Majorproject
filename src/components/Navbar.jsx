import React, { useRef } from 'react';
import Logo from '../images/CompanyLogo.png'
import '../components/Navbar.css';
import '../components/Topheader.css';
import Menu from '../images/menu.png'
import Close from '../images/close.png';
function Navbar()
{
    let Links =[
        {name:"Home",link:"/"},
        {name:"About Us",link:"#aboutUsScroll"},
        {name:"Properties",link:"#properties"},
        {name:"Blog",link:"#footer"},
        {name:"Pages",link:"#Offers"},
        {name:"Contacts",link:"#ContactUs"},
    ];
    const navRef = useRef();
    const showNavbar =()=>
    {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <div className="navbar">
            <div className="logo">
                <a href="/"><img src={Logo} alt="Company Logo" /></a>
            </div>
            <div className="navlinks">
                <nav ref={navRef}>
                    <ul>
                        {
                            Links.map((link)=>
                            (
                                <li>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                        <button className='nav-btn close-btn' onClick={showNavbar}>
                                    <img src={Close} alt="Close Bar" />
                                    </button>
                    </ul>
                </nav>
            </div>
            <button className='nav-btn' onClick={showNavbar}>
                <img src={Menu} alt="Menu Bar" />
            </button>
        </div>
    );
}

export default Navbar;