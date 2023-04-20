import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/style.css";
import { Container, Row, Col, Button, Form, Nav, Navbar, Badge, Accordion } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from "react-helmet";
import { withPrefix } from "gatsby"
import { Experience } from "../components/Experience";
import { Canvas } from "@react-three/fiber";



const IndexPage = () => {
  return (

    <>
      <Header />

      <Container fluid className='containerCustom'>
        <section className='homePage'>
          <Row className='justify-content-between'>
            <Col md={12} lg={5} className="d-flex align-items-center mb-5 mb-lg-0">
              <div>
                <h1 className='font70 mb-3 position-relative'>
                  <span>Confidently Hire</span><br />Three.JS developers
                </h1>
                <p className='mb-5 font24Medium'>
                  Hire top Three.js developers that can meet your vision of delivering outstanding gaming experiences!
                </p>
                <p className='mb-3'>
                  With our end-to-end Three.js development services, we offer customized solutions including dynamic and visually stunning 3D graphics and animations for varied games for a wide range of platforms and devices.
                </p>
              </div>
            </Col>
            <Col md={12} lg={7} className="text-center">
              <Canvas className="modalHeight">
                <Experience  />
              </Canvas>
            </Col>
          </Row>
        </section>

        <section className='homePage row justify-content-between'>
          <Col md={12} lg={5} className="d-flex align-items-start mb-5 mb-lg-0">
            <div>
              <h2 className='font50 mb-3'><span>Dedicated Three.js</span> Developers for Hire</h2>
              <p className='mb-5 font24Medium'>
                At ThreeJSDevelopers, we understand that finding the right developer can be a challenge.
              </p>
              <p className='mb-3'>
                That's why we have an expert team of experienced Three.js developers in India who are well-versed in Three.js development and cost-effective solution. The team is dedicated to delivering high-quality solutions that meet business requirements to the tee.
              </p>
            </div>
          </Col>
          <Col md={12} lg={5} className="d-flex align-items-end mb-5 mb-lg-0">
            <div>
              <h2 className='font50 mb-3'><span>What is Three.js </span>Framework?</h2>
              <p className='mb-3'>
                A well-known open-source JavaScript package called three.js creates and displays 3D computer graphics in web browsers. The package uses WebGL, a low-level API for generating 3D images in real-time. It offers various tools and functions for designing and animating 3D objects, sceneries, and visual effects.
              </p>
              <p className='mb-3'>
                Without any additional plugins or software, developers can leverage three.js to create immensely dynamic and immersive online applications, games, data visualizations, and virtual reality experiences that will attract attention at a low cost.
              </p>
            </div>
          </Col>
        </section>

        <section className='homePage'>
          <Col md={12} lg={12} className="mb-5 mb-lg-0">
            <h3 className='font50 mb-3'><span>The Expertise of Our Top </span><br />Three.js Developers</h3>
            <Row>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <div className='whiteBox'>
                  <h3 className='font26Blue mb-3'>Three.js Website<br />Development</h3>
                  <p className='font16Black'>
                    Our team of experienced Three.js programmers for hire to build custom websites using ThreeJS. Whether you need a simple brochure website or a complex e-commerce platform, we've got you covered.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <div className='whiteBox'>
                  <h3 className='font26Blue mb-3'>Three.js Web Application<br />Development</h3>
                  <p className='font16Black'>
                    Hire best Three.js developers to build custom web applications using Three.js, delivering solutions that meet business requirements. We are experts in developing scalable and secure web applications that can handle large amounts of data.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <div className='whiteBox'>
                  <h3 className='font26Blue mb-3'>End-to-End Integration<br />Services</h3>
                  <p className='font16Black'>
                    We offer integration and implementation services for Three.js driving complex 3D computer graphics to reality. Our Three.js experts run through definitive coding standards and integrate solutions within existing frameworks without hassles.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <div className='whiteBox'>
                  <h3 className='font26Blue mb-3'>Three.js Game<br />Development</h3>
                  <p className='font16Black'>
                    Our Three.js game developers have experience in building games using Three.js. Whether you need a simple 2D game or a complex 3D game, we have the expertise to deliver. Additionally, we offer web-based games with HD simulations that guarantee AR applications directly on the browser.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <div className='whiteBox'>
                  <h3 className='font26Blue mb-3'>Three.js VR and AR<br />Development</h3>
                  <p className='font16Black'>
                    Our Three.js coders have experience in building virtual and augmented reality solutions using Three.js. We can help you create 3D-based immersive experiences with multiple scenes, textures, and materials that engage and delight your users.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <div className='whiteBox'>
                  <h3 className='font26Blue mb-3'>Three.js UI/UX Design and<br />Development</h3>
                  <p className='font16Black'>
                    Our Three.js designers and developers can work together to create beautiful and user-friendly interfaces using Three.js. We believe that good design is a key component of any successful project and the games come out alive too!
                  </p>
                </div>
              </Col>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <div className='whiteBox'>
                  <h3 className='font26Blue mb-3'>Three.js Maintenance and<br />Support</h3>
                  <p className='font16Black'>
                    Our team provides ongoing maintenance and support to ensure that your Three.js solutions remain secure and up-to-date. We are here to help you every step of the way.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </section>

        <section className='homePage row align-items-center'>
          <Col md={12} lg={6} className="d-flex mb-5 mb-lg-0">
            <h2 className='font50 mb-3'><span>Why Hire a</span><br />Three.js Developer<br /><span>from US?</span></h2>
          </Col>
          <Col md={12} lg={6} className="d-flex justify-content-end mb-5 mb-lg-0">
            <div className='col-12 col-md-12 col-lg-10'>
              <p>
                ThreeJSDevelopers is a veteran Three.js development company that offers pertinent solutions for your gaming app needs. As mentioned before, we have a team of highly skilled and experienced Three.js developers who are keen to work for you at your beck and call leveraging their deep understanding of 3D graphics and animations. Secondly, we always level up on the latest trends and advancements in the field, ensuring that your gaming project stays ahead of the curve. Lastly, we are committed to delivering high-quality gaming solutions based on the Three.js library that meets your needs completely.
              </p>
            </div>
          </Col>
        </section>

        <section className='homePage row justify-content-between'>
          <Col md={12} lg={6} className="d-flex align-items-start mb-5 mb-lg-0">
            <div>
              <h2 className='font50 mb-3'><span>Advantages of Hiring</span><br />Our Dedicated Three.js<br /><span>Expert</span></h2>
            </div>
          </Col>
          <Col md={12} lg={5} className="d-flex align-items-end mb-5 mb-lg-0">
            <div>
              <p className='mb-4 font24Medium'>
                Our Three.js development services offer several advantages, including:
              </p>
              <ul className='list'>
                <li>Experienced and dedicated developers with strong technical expertise in Three.js development</li>
                <li>Innovative and customized solutions that cater to your specific business needs</li>
                <li>High-quality and visually stunning 3D graphics and animations</li>
                <li>Transparent and seamless communication throughout the development process</li>
                <li>Commitment to delivering high-quality solutions within budget and on time</li>
                <li>Flexible engagement models to suit your business requirements</li>
                <li>Continuous support and maintenance post-deployment</li>
                <li>Expertise in latest technologies and trends in leveraging Three.js library</li>
              </ul>
            </div>
          </Col>
        </section>

        <section className='homePage row justify-content-between'>
          <Col md={12} lg={6} className="d-flex align-items-start mb-5 mb-lg-0">
            <div>
              <h2 className='font50 mb-3'><span>How to Hire</span><br />Three.js Developers?</h2>
              <ol className='list'>
                <li><span className='fontBold'>Contact us and requirement analysis:</span> Get in touch with us to discuss your project requirements and how we can help.
                </li>
                <li><span className='fontBold'>Assessment:</span> We will assess your requirements and match you with the best Three.js developer for your project.
                </li>
                <li><span className='fontBold'>Wireframe:</span> We create a tentative wireframe in 3D for your game along with a framework for world-building that is required for different levels.</li>
                <li><span className='fontBold'>Plan:</span> Our Three.js developer will work with you to create a plan for your project.
                </li>
                <li><span className='fontBold'>Development:</span> Our Three.js developer will begin development, keeping you updated throughout the process.
                </li>
                <li><span className='fontBold'>Testing:</span> We test the games and solutions stringently so that they do not have bugs and inconsistencies in the long run.
                </li>
                <li><span className='fontBold'>Delivery:</span> Once your project is complete, we will deliver the final solution to you for review.</li>
              </ol>
            </div>
          </Col>
          <Col md={12} lg={5} className="d-flex align-items-end mb-5 mb-lg-0">
            <div>
              <h2 className='font50 mb-3'>Technology Stack</h2>
              <p className='mb-4'>
                Our Three.js developers are well-versed in a wide range of technologies, including HTML5, CSS3, JavaScript, and Three.js. We are well versed with Three.js and its 3D library that provides tools to develop complex 3D scenes right in the browser. We are adept in using JavaScript and tweak settings to create definitive scenes, proper lights, realistic shadows, materials, fantastic textures, and the like. Rest assured; we provide HD simulation results that guarantee an immersive experience.
              </p>
              <div className='mb-4'>
                <h3 className='font24Medium'>Skills</h3>
                <Badge bg="" className='me-2 mb-2 customBadge'>Three.js</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>WebGL</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>JavaScript</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>3D Modeling</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>3D Graphics</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Computer Graphics</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Animation</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Game Development</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Virtual Reality</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Augmented Reality</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Full-Stack Development</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Real-Time Rendering</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>UI/UX Design</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Cross-Platform Development</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>web development</Badge>
              </div>
              <div className='mb-4'>
                <h3 className='font24Medium'>Tools and Frameworks</h3>
                <Badge bg="" className='me-2 mb-2 customBadge'>Three.js</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>WebGL</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Babylon.js</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>A-Frame</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Unity</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Unreal Engine</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Blender</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Autodesk 3ds Max</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Maya</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>SketchUp</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Photoshop</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Inkscape</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Adobe Illustrator</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>GIMP</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>Substance Painter</Badge>
                <Badge bg="" className='me-2 mb-2 customBadge'>ZBrush</Badge>
              </div>
            </div>
          </Col>
        </section>

        <section className='homePage row justify-content-between'>
          <div>
            <h2 className='font50 mb-3'><span>FAQ</span><br />Frequently Asked Questions</h2>
            <Accordion defaultActiveKey="0" className="customAccordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What makes our Three.js developers unique?</Accordion.Header>
                <Accordion.Body>
                Our Three.js developers are experts in the library and have extensive experience in creating complex 3D graphics and animations. They are dedicated to delivering high-quality code and ensuring our clients' projects meet their requirements. We carefully screen and select our developers to ensure they have the skills and experience to deliver exceptional results.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How much does it cost to hire a Three.js Developer?</Accordion.Header>
                <Accordion.Body>
                The cost of hiring a Three.js developer can vary depending on the project's complexity and the developer's experience. At Threejsdevelopers.com, we offer competitive rates based on the specific needs of each project. Before starting work, we work with clients to understand their budgets and provide transparent pricing and project estimates.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How can I quickly hire a Three.js Developer with less risk?</Accordion.Header>
                <Accordion.Body>
                At Threejsdevelopers.com, we make it easy to hire top-notch Three.js developers with minimal risk. We carefully vet and screen our developers, ensuring they have the skills and experience to deliver high-quality work. We also provide clear project estimates and pricing upfront so clients know what to expect before starting work. Additionally, we offer a satisfaction guarantee, ensuring that clients are happy with the results before finalizing payment.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>How does Threejsdevelopers.com find its Three.js developers?</Accordion.Header>
                <Accordion.Body>
                We find our Three.js developers through a rigorous screening process that includes reviewing resumes, evaluating portfolios, and conducting technical interviews. We also look for candidates with extensive experience in Three.js development and a strong understanding of web development best practices. Once we identify qualified candidates, we carefully vet them to ensure they meet our standards for quality and professionalism.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Why are our Three.js Developers Different from Freelance Developers? </Accordion.Header>
                <Accordion.Body>
                Threejsdevelopers.com provides clients access to a network of expert Three.js developers who have been carefully vetted and screened.<br /><br />
                We offer transparent pricing, project estimates, and a satisfaction guarantee, ensuring clients receive high-quality work at a fair price. On the other hand, freelancer three.js developers work on a project-by-project basis. While they may offer competitive rates, they may have a different level of experience or be as reliable as developers vetted and screened by a company like Threejsdevelopers.com.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

      </Container>

      <Footer />
    </>

  )
}

export default IndexPage

// export const Head = () => <title>Hire Three.js Developers – ThreeJSDevelopers</title>
export function Head() {
  return (
    <>
      <html lang="en" />
      <link rel="icon" href="../assets/images/favicon.ico" />
      <title>Hire Three.js Developers – ThreeJSDevelopers</title>
      <meta name="description" content="ThreeJSDevelopers is your best option to hire top three.js developers or a dedicated team on an hourly, monthly, or full-time basis." />
      {/* <meta name="google-site-verification" content="aFnLVIa5d6C-WBtUP7WvtqPhLV7JELYTeSVEJ180iqU" /> */}
      <meta name="google-site-verification" content="qlaTwHumQoxxppm5qeqCrDJp4_8X6Si_SCN1kQeQs44" />
      <link rel="canonical" href="https://www.threejsdevelopers.com/" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      {/* <script src='../assets/js/modernizr.min.js' async></script>
      <script src='../assets/js/jquery.min.js' async></script>
      <script src='../assets/js/three.min.js' async></script>
      <script src='../assets/js/TweenMax.min.js' async></script>
      <script src='../assets/js/OBJLoader.js' async></script>
      <script src='../assets/js/objHead.js' async></script> */}
    </>
  )
}
