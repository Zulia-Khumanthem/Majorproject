import React from 'react'
import '../components/ResidentialProperties.css';
import FooterGalleryPhoto from './FooterGalleryPhoto';
import './Navbar.css';
function ResidentialProperties() {
    const properties = [
        {
            image: FooterGalleryPhoto.properties1,
            title:"Single-Family Homes"
        },
        {
            image: FooterGalleryPhoto.properties2,
            title:"Town Houses"
        },
        {
            image: FooterGalleryPhoto.properties3,
            title:"Multi-Family Homes"
        },
        {
            image: FooterGalleryPhoto.properties4,
            title:"Condominiums"
        },
    ]
  return (
    <div className='ResidentialProperties' id='properties'>
        <h1>Residential <span>Property Categories</span></h1>
        <p>At our Agency, we work with various types of residential real estate property. You can find </p>
        <p>out more about our properties by browsing our website.</p>
        <div className="propertiesflex">
            {properties.map((propertiescontent, index) =>
            (
                <div key={index} className="propertycard">
                    <img src={propertiescontent.image} alt={propertiescontent.title} />
                    <p>{propertiescontent.title}</p>
                </div>
            ))}
        </div>
        <div className="btn">
            <button>View  All Properties</button>
        </div>
    </div>
  )
}

export default ResidentialProperties