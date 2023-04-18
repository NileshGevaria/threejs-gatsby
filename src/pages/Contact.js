import * as React from "react"
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Header from "./Header";
import Footer from "./Footer";
// import { Helmet } from "react-helmet";

const Contact = () => {

    return (
        <>
            <Header />

            <Container fluid className='containerCustom'>
                <section className='contactPage'>
                    <Row className='justify-content-between sectionHeight w-100'>
                        <Col md={12} lg={4} className="d-flex align-items-center mb-5 mb-lg-0">
                            <div>
                                <h1 className='font70 mb-3'><span>Our</span><br />Contact</h1>
                                <p className='mb-3'>
                                    ThreeJSDevelopers is your trusted partner for ThreeJS development services.
                                    Get in touch with us today to discuss your project and how we can help bring your ideas to life.
                                </p>
                                <h3 className='mt-5 font24Medium'>Nishant Bijani</h3>
                                <div className='mb-2'>
                                    <span className='font16Bold'>Email ID</span><br />
                                    <span className='font16'>nishant@threejsdevelopers.com</span>
                                </div>
                                <div className='mb-2'>
                                    <span className='font16Bold'>Mobile No</span><br />
                                    <span className='font16'>+91-9429005987</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={6} className="d-flex align-items-center mb-5 mb-lg-0">
                            <div className='bgn-wf-wrapper' id='BiginWebToEntityFormDiv267113000000569107'>
                                <form id='BiginWebToContactForm267113000000569107'
                                    name='BiginWebToContactForm267113000000569107' method='POST' enctype='multipart/form- data' onSubmit='javascript:document.charset="UTF-8"; return validateForm267113000000569107()' accept-charset='UTF-8'>
                                    <input type='text' style={{ display: "none" }} name='xnQsjsdp' value='3fef1381d1076883454f9b8f5f77f1082ac431ee9953419b387a64de1fb423bc' />
                                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                                    <input type='text' style={{ display: "none" }} name='xmIwtLD' value='e9cfc25d3a0c3f38a426576bf61dd1def95d0d5b2437a4b9e9f1e8dafd7600fd' />
                                    <input type='text' style={{ display: "none" }} name='actionType' value='Q29udGFjdHM=' />
                                    <input type='text' style={{ display: "none" }} name='returnURL' value='https://threejsdevelopers.com' />
                                    <div className='row' id="elementDiv267113000000569107">
                                        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-6 bgn-wf-row mb-3">
                                            <div className="bgn-wf-field">
                                                <input name="First Name" className='inputCustom w-100' type="text" maxlength="40" placeholder="First Name *" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-6 bgn-wf-row mb-3">
                                            <div className="bgn-wf-field">
                                                <input name="Last Name" className='inputCustom w-100' type="text" maxlength="80" placeholder="Last Name *" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-6 bgn-wf-row mb-3">
                                            <div className="bgn-wf-field">
                                                <input name="Email" className='inputCustom w-100' type="text" maxlength="100" placeholder="Email *" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-6 bgn-wf-row mb-3">
                                            <div className="bgn-wf-field">
                                                <input name="Phone" className='inputCustom w-100' type="number" maxlength="80" placeholder="Phone *" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 bgn-wf-row mb-3">
                                            <div className="bgn-wf-field">
                                                <textarea className='inputCustom w-100' name="Description" rows={4} maxlength="32000" placeholder="Description"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 bgn-wf-row">
                                            <div className="bgn-wf-field">
                                                <Button variant="" className='btnPrimary me-3' id='formsubmit267113000000569107' type='submit' value='Submit'>Submit</Button>
                                                <Button variant="" className='btnSecondary' onclick='disableSubmitwhileReset267113000000569107()' type='reset' value='Reset'>Reset</Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <Helmet>
                                        <script src='FormScript.js'></script>
                                    </Helmet>

                                    <Helmet>
                                        <script id='wf_script' src='WebformScriptServlet.js'></script>
                                    </Helmet> */}

                                </form>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>

            <Footer />
        </>
    );

}

export default Contact;

// export const Head = () => <title>ContactUS - ThreeJSDevelopers</title>
export function Head() {
    return (
      <>
        <html lang="en" />
        <title>ContactUS - ThreeJSDevelopers</title>
        <meta name="description" content="Contact Threejsdevelopers.com for all type of Threejs professional services." />
        <link rel="canonical" href="https://www.threejsdevelopers.com/Contact" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <script src='js/FormScript.js'></script>
        <script id='wf_script' src='js/WebformScriptServlet.js'></script>
      </>
    )
  }
