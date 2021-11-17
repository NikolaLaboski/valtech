import styled from 'styled-components';

export const Footer = styled.div`
  padding: 80px 60px;
  background-color: #FFFFFF;
  color: black;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  color: #000000;
`;

export const Row = styled.div`
  color: #000000;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #000000;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: underline;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: #000000;
  margin-bottom: 40px;
  font-weight: bold;
`;