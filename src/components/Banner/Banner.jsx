import { Button, Col, Row } from "react-bootstrap";
import Typical from "react-typical";


export default function Banner() {
    return (
        <>
            <div className="b-example-divider"></div>
            <div className="b-example-divider"></div>
            <div className="b-example-divider"></div>
            <div className="b-example-divider"></div>
            <div className="b-example-divider"></div>
            <Row className="text-center">
                <Col>
                    <div className="px-4 py-5 my-5" >
                        <Typical 
                            steps={['Hi, there!', 1000, 'My name is Juan Oscco Mori', 1000, "I'm Development Junior", 1000]}
                            loop={Infinity}
                            wrapper="h1"
                        />
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">
                                I am a developer from Lima Peru, 
                                I am 24 years old, I speak Spanish but I try to learn English on my own, 
                                I am still a novice but I like to learn, 
                                you can have my networks so you can see my projects and my trajectory.
                            </p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <Button type="button" href="https://www.linkedin.com/in/juan-oscco-mori-86aa101a8/" className="btn btn-primary btn-lg px-4">Linkedin <i className="bi bi-linkedin"></i></Button>
                                <Button type="button" href="https://github.com/JuanOsccoMori" className="btn btn-secondary btn-lg px-4">Github <i className="bi bi-github"></i></Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
};


