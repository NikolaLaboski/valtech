import styled from "styled-components";
import img from "../../images/Intersection2.png"

export const HeroContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    .background{
    background-image: url(${img});
    background-size:100% 100%;
    background-repeat: no-repeat;
    backgrround-position:center;
    }
`

export const HeroBg = styled.div`
    
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%
    overflow: hidden;

    .image-bg{
    -o-object-fit: cover;
    object-fit: cover;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    width: 100%;
    height: 253px;
    overflow:hidden;
    position:absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 0.82;

    .contact{
        background: #221F1F 0% 0% no-repeat padding-box;
        box-shadow: 0px 8px 0px #00000033;
        border-radius: 30px;
        opacity: 1;
        font-size: 1.2rem;
        color:#fff;
        padding:14px 32px;
        margin-top:36%;

        &:hover {
            background-color: #00E0FF;
            color: white;
          }
    }
`
export const HeroH4 = styled.div`
    color: black;
    font-size: 18px;
    text-align:center;
    margin-top: 9px;

    @media (max-width: 768px){
        font-size:12px;
    }

    @media (max-width: 480px){
        foont-size:8px;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top:32px;
    display:flex;
    flex-direction: column;
    align-items:center;
`
