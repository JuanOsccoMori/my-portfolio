import { Card, Col, Container, Row } from "react-bootstrap";
import { one, two, three } from "../../assets/js/export";

import "./projects.css";

export default function Projects() {
    return (
        <>  
            
            <div className="divider-projects"/>
            <Container className="px-4 py-5" id="projects">
                <br /> <br /> <br />
                <h2 className="pb-2 border-bottom text-center">My Projects</h2>
                <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <Col>
                        <Card className="bg-dark text-white h-100 overflow-hidden shadow">
                            <Card.Img src={one} alt="Card image" className="h-100" />
                            <Card.ImgOverlay>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <Card.Title>
                                        <a href="https://github.com/JuanOsccoMori/testing-crud-login-drf" style={{ color: "white", textDecoration:"none"}}><h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">Django Rest Framework</h2></a>
                                        
                                    </Card.Title>
                                    <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                            <Card.Text className="d-flex align-items-center me-3">Resume:</Card.Text>
                                        </li>
                                        <li className="me-auto">
                                            <a href="https://github.com/JuanOsccoMori/testing-crud-login-drf" style={{ color: "white", fontSize:"1.2rem"}}><i className="bi-github" role="img" aria-label="GitHub" ></i></a>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white h-100 shadow">
                            <Card.Img src={two} alt="Card image" className="h-100" />
                            <Card.ImgOverlay>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <Card.Title>
                                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">My Little Videogame</h2>
                                    </Card.Title>
                                    <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                            <Card.Text className="d-flex align-items-center me-3">Resume:</Card.Text>
                                        </li>
                                        <li className="me-auto">
                                            <i className="bi-github" role="img" aria-label="GitHub"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-paperclip" role="img" aria-label="paperclip"></i>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white h-100 overflow-hidden shadow">
                            <Card.Img src={three} alt="Card image" className="h-100"/>
                            <Card.ImgOverlay>
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <Card.Title>
                                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">Application in Flask</h2>
                                    </Card.Title>
                                    <ul className="d-flex list-unstyled mt-auto">
                                        <li className="me-auto">
                                            <Card.Text className="d-flex align-items-center me-3">Resume:</Card.Text>
                                        </li>
                                        <li className="me-auto">
                                            <i className="bi-github" role="img" aria-label="GitHub"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-paperclip" role="img" aria-label="paperclip"></i>
                                        </li>
                                    </ul>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>

            </>
    )
}
