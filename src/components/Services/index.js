
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png'

import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesImage,
    ServicesH2,
    ServicesP
} from './ServicesElements'


const Services = () => {
    return (
        <div>
            <ServicesContainer id="services">
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesImage src={image1}/>
                        <ServicesH2>Teaser Title</ServicesH2>
                        <ServicesP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien.
                         Vestibulum ante ipsum primis in faucibus orci…
                        </ServicesP>
                        <button className="read">Read more</button>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesImage src={image2}/>
                        <ServicesH2>Teaser Title</ServicesH2>
                        <ServicesP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien.
                         Vestibulum ante ipsum primis in faucibus orci …
                        </ServicesP>
                        <button className="read">Read more</button>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesImage src={image3}/>
                        <ServicesH2>Teaser Title</ServicesH2>
                        <ServicesP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien.
                         Vestibulum ante ipsum primis in faucibus orci…
                        </ServicesP>
                        <button className="read">Read more</button>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesImage src={image4}/>
                        <ServicesH2>Teaser Title</ServicesH2>
                        <ServicesP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc enim ligula, auctor rhoncus massa non, congue dignissim sapien.
                         Vestibulum ante ipsum primis in faucibus orci…
                        </ServicesP>
                        <button className="read">Read more</button>
                    </ServicesCard>
                </ServicesWrapper>
                
            </ServicesContainer>
        </div>
    )
}

export default Services;