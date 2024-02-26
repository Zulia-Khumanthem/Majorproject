// import Topheader from './components/Topheader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import Footer from './components/Footer.jsx'
import Services from './components/Services.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import ResidentialProperties from './components/ResidentialProperties.jsx';
import Cards from './components/Cards.jsx';
import ContactUs from './components/ContactUs.jsx';
import Offer from './components/Offer.jsx';
function App() {
  return (
    <div className="App">
      <ScrollReveal />
      {/* <Topheader /> */}
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <ResidentialProperties />
      <Offer />
      <ContactUs />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
