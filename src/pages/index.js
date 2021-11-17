import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import Searchbar from '../components/SearchPage/Searchbar';
import Services from '../components/Services';
import Contactme from '../components/Contact';
import FooterContainer from '../components/Footer';







const Home = () => {
    const [isOpen, setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    };

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle}/>  
          <HeroSection />
          <Searchbar />
          <Services />
          <Contactme />
          <FooterContainer />
        </>
    )
}

export default Home;