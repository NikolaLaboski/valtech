import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: auto;
    background: #FFFFFF;
    overflow:hidden;
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
    grid-row-gap: 11.1%;
    padding-bottom: 10%;
    align-items: center;
    overflow:hidden;
    margin-top: 10%;
    margin-bottom: 5%;

    @media (max-width: 1000px){
        grid-template-columns: 1fr;
        grid-column-gap: 250px;
    }

    @media (max-width: 768px){
        grid-template-columns: 1fr;
        grid-column-gap: 200px;
        padding 50px 20px;
    }    
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    max-height: 340px;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    overflow:hidden;
    margin-top: 10%;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    .read{
        background: #221F1F 0% 0% no-repeat padding-box;
        border-radius: 10px;
        opacity: 1;
        font-size: 14px;
        color:#fff;
        padding:7px 32px;
        margin-top:1%;
        margin-bottom: 1%;
        margin-left:50%;
    

        &:hover {
            background-color: #00E0FF;
            color: white;
          }
    }

    @media all and (max-width:568px){
          display:block;
          margin:5% auto;
    }
    
`;

export const ServicesImage = styled.img`
    height: 160px;
    width: 100%;
    margin-bottom: 10px;
    overflow:hidden;
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;