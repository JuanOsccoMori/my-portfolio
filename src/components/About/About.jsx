import { Col, Container, Row } from "react-bootstrap";
import { programming } from "../../assets/js/export";

import "./about.css";

export default function About() {
    return (
        <>
        <div id="aboutme"/>
        <div className="b-example-divider"></div>
        <br /><br /><br /><br />
            <Row>
                <Col>
                    <Container className="my-5">
                        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg">
                            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                                <h1 className="display-4 fw-bold lh-1">About me</h1>
                                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            </div>
                            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                                <img className="rounded-lg-3" src={programming} alt="programming" width="720"/>
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </>
    )
};



    
