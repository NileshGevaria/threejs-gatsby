import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import aboutImg from "../assets/images/aboutImg.png";

function AboutUs() {
    
        return (
            <>
                <Header />

                <Container fluid className='containerCustom'>
                    <section className='aboutusPage'>
                        <Row className='justify-content-between align-items-center sectionHeight w-100'>
                            <Col md={12} lg={5} className="d-flex align-items-center mb-5 mb-lg-0">
                                <div>
                                    <h1 className='font70 mb-3'><span>About</span><br />Our Company</h1>
                                    <p className='mb-3'>
                                        Founded in 2015, ThreeJS Developers has grown from strength to strength in harnessing technology to fuel business solutions for its clients. As a veteran in gaming app development, we have leveraged AR/ VR development to ensure immersive experiences for end users who are enthralled and excited. We also provide continued support and maintenance for these games, apps, and websites that we develop, fulfilling the role of an ideal tech partner for the clients.
                                    </p>
                                </div>
                            </Col>
                            <Col md={12} lg={6} className="text-center position-relative mb-3 mb-ld-0">
                                <div><img src={aboutImg} className="img-fluid" /></div>
                                {/* <div className='aboutUp'><img src={aboutUp} className="img-fluid" /></div>
                                <div className='aboutDown'><img src={aboutDown} className="img-fluid" /></div> */}
                            </Col>
                        </Row>
                    </section>
                </Container>

                <Footer />
                
            </>
        );
    
}

export default AboutUs;

// export const Head = () => <title>About US - ThreeJSDevelopers</title>
export function Head() {
    return (
      <>
        <html lang="en" />
        <title>About US - ThreeJSDevelopers</title>
        <meta name="description" content="Know more about Threejsdevelopers company and it's fundamentals." />
        <link rel="canonical" href="https://www.threejsdevelopers.com/AboutUs" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </>
    )
  }