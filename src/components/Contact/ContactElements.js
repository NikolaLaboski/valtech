import styled from "styled-components";
import img from "../../images/Intersection1.png"

export const Contact = styled.div`
    width: 100%;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 5%;
`;

export const ContactOverlay = styled.div`
    width: 100%;
    padding-top: 10%;
    padding-bottom: 10%;
    
`;

export const Container = styled.div`
.form {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  form {
    width: 40%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
    background-color: white;
    overflow: hidden;
    border-radius: 20px;
    align-items: center;


    @media (max-width: 1000px){
        flex-direction: column;
        justify-content: flex-start;
        align-items:stretch;
    }

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: flex-start;
    } 

  }
  
  form button {
    width: 100%;
    height: 55px;
    border: 0;
    border-radius: 5px;
    background-color: #001517;
    -webkit-transition: 0.5s linear;
    -o-transition: 0.5s linear;
    transition: 0.5s linear;
    color: white;
    font-weight: bold;
    margin-top: 20%;
    

    @media all and (max-width:30em){
          display:block;
          margin:0.4em auto;
        font-size:10px;
         }
  }

  form button:hover {
    background-color: unset;
    border: 2px solid #e49504;
    -webkit-transition: 0.5s linear;
    -o-transition: 0.5s linear;
    transition: 0.5s linear;
    color: black;
  }
  .formWord {
    width: 40%;
    padding: 4%;

    @media all and (max-width:1000px){
          display:block;
          margin:0.4em auto;
          width: 90%;
         }
  }
  .formWord h2 {
    font-size: 25px;
    font-weight: bold;
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 10%;
  }
  .formWord input {
    width: 100%;
    height: 50px;
    margin-bottom: 10%;
    border: 0;
    margin-top: 2%;
    padding-left: 3%;
    background: #ffffff;
    -webkit-box-shadow: 0px 0px 48px 0px rgb(218, 218, 218);
    box-shadow: 0px 0px 48px 0px rgb(218, 218, 218);
  }
  .formWord textarea {
    width: 100%;
    margin-bottom: 10%;
    border: 0;
    margin-top: 2%;
    height: 40px;
    color: black;
    -webkit-box-shadow: 0px 0px 48px 0px rgb(218, 218, 218);
    box-shadow: 0px 0px 48px 0px rgb(218, 218, 218);
    padding-left: 3%;
  }
`