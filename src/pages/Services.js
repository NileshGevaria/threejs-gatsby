import * as React from "react"
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
// import {Helmet} from "react-helmet";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


const Services = () => {
    
        return (
            <>
                <Header />                

                <Container fluid className='containerCustom'>
                    <section className='servicesPage mt-5'>
                        <Row className='justify-content-between'>
                            <Col md={12} lg={12}>
                                <Row className='justify-content-between align-items-center'>
                                    <Col md={12} lg={6} className="mb-3 mb-lg-0">
                                    <h1 className='font70'><span>Our</span><br />Services</h1>
                                    </Col>
                                    <Col md={12} lg={4} className="mb-3 mb-lg-0">
                                        <p>
                                            ThreeJS Developers provides a slew of developing, designing, integration, and implementation services covering all client requirements.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} lg={12} className="ServcieSlider">
                                <Splide hasTrack={ false }
                                options={ {
                                    rewind: true,
                                    rewindSpeed: 1000,
                                    pagination: false,
                                    gap   : '1rem',
                                    width : '100%',
                                    perPage: 4,
                                    perMove: 1,
                                    breakpoints: {
                                        1440: {
                                            perPage: 3,
                                        },
                                        991: {
                                            perPage: 2,
                                        },
                                        767: {
                                            perPage: 2,
                                        },
                                        640: {
                                            perPage: 1,
                                        },
                                        480: {
                                            perPage: 1,
                                        },
                                    }
                                } }
                                >
                                    <SplideTrack>
                                        <SplideSlide>
                                            <div className='whiteBox'>
                                                <h3 className='font26Blue mb-3'>ThreeJS Website<br />Development</h3>
                                                <h3 className='font16Black'>
                                                    We are adept in ThreeJS website development, enabling clients to explore their online identities fully in multiple ways, including a single page or a dynamic multi-page ecommerce website. 
                                                </h3>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className='whiteBox'>
                                                <h3 className='font26Blue mb-3'>ThreeJS Web Application<br />Development</h3>
                                                <h3 className='font16Black'>
                                                    Our team of ThreeJs developers build tailored web applications using ThreeJS that are scalable and flexible while highly secure in handling large swathes of data.
                                                </h3>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className='whiteBox'>
                                                <h3 className='font26Blue mb-3'>End-to-End Integration<br />Services</h3>
                                                <h3 className='font16Black'>
                                                    Our comprehensive integration services for Three JS enable the blending of two or more technologies with robust coding standards that extend each other’s capabilities.
                                                </h3>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className='whiteBox'>
                                                <h3 className='font26Blue mb-3'>ThreeJS Game<br />Development</h3>
                                                <h3 className='font16Black'>
                                                    Our ThreeJS game developers are adroit in developing simple and complex 2D and 3D games that span multiple genres and niches.
                                                </h3>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className='whiteBox'>
                                                <h3 className='font26Blue mb-3'>ThreeJS VR and AR<br />Development</h3>
                                                <h3 className='font16Black'>
                                                    Our ThreeJS developers are experts in building immersive experiences for various domains through virtual and augmented reality solutions, enabling outstanding real-world applications.
                                                </h3>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className='whiteBox'>
                                                <h3 className='font26Blue mb-3'>ThreeJS UI/UX Design and<br />Development</h3>
                                                <h3 className='font16Black'>
                                                    Our Threejs designers create interactive, immersive, and user-friendly interfaces that are aesthetically brilliant and connote utility in the best minimalist experience!
                                                </h3>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className='whiteBox'>
                                                <h3 className='font26Blue mb-3'>ThreeJS Maintenance and<br />Support</h3>
                                                <h3 className='font16Black'>
                                                    Our team of ThreeJS developers are committed and dedicated to improving the ThreeJS solutions from time to time, helping clients to remain relevant with added features and functionalities.
                                                </h3>
                                            </div>
                                        </SplideSlide>
                                    </SplideTrack>
                                    <div className="splide__arrows"></div>
                                </Splide>
                            </Col>
                        </Row>
                    </section>
                </Container>

                <Footer />
            </>
        );
    
}

export default Services;

// export const Head = () => <title>ThreeJS Services - ThreeJSDevelopers</title> 
export function Head() {
    return (
      <>
        <html lang="en" />
        <title>ThreeJS Services - ThreeJSDevelopers</title> 
        <meta name="description" content="Threejsdevelopers.com offers all type of Threejs services in India, UK and the USA at affordable price." />
        <link rel="canonical" href="https://www.threejsdevelopers.com/Services" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </>
    )
  }