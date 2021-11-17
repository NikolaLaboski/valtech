import React from 'react';
import { Footer, Wrapper, Row, Column, Link, Title } from './FooterElements';

const FooterContainer = ()=> {
    return (
        <Footer>
            <Wrapper> 
            <Row>
                <Column>
                    <h1>valtech_</h1>
                </Column>
                <Column>
                <Title>Footer Section Title</Title>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                </Column>
                <Column>
                <Title>Footer Section Title</Title>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                </Column>
                <Column>
                <Title>Footer Section Title</Title>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                    <Link href="#">FooterLink</Link>
                </Column>
            </Row>
            </Wrapper>
        </Footer>
    )
}

export default FooterContainer;