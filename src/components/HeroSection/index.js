import React, {useState} from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroBtnWrapper, HeroH4 } from './HeroElements';


const HeroSection = () => {

    const [hover, setHover]=useState(false);

    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer >
            <HeroBg className="background">
            </HeroBg>
            <HeroContent>
                <HeroBtnWrapper>
                    <button to="section4" className="contact" onMouseEnter={onHover} onMouseLeave={onHover} >Contact</button>
                </HeroBtnWrapper>
                <HeroH4>Lorem ipsum dolor sit amet</HeroH4>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
