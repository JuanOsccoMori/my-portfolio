import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

import "./contactme.css";
import { useRef } from "react";

export default function ContactMe() {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm(
            'service_r0lxf1f',
            'template_wbxaljc',
            form.current,
            'user_M76RfeKCN1udC2dQDZGFX'
        ).then(res => {
            console.log(res.text)
        }).catch(err => console.log(err))
    }

    return (
        <>
        <div id="contact"/>
        <br /><br />
        <div className="divider-contact"/>
        <Container className="my-5" id="contact">
            <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg" >
                <Col className="col-lg-12 p-3 p-lg-5 pt-lg-3">
                    <div className="py-5 my-5">
                        <h1 className="text-center">Contact me</h1>
                        <br/><br />
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="First name"
                                    >
                                        <Form.Control type="text" name="first_name" placeholder="First name"  required/>
                                    </FloatingLabel>
                                </div>
                                <div className="col-sm-6">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Last name"
                                    >
                                        <Form.Control type="text" name="last_name" placeholder="Last name" required/>
                                    </FloatingLabel>
                                </div>
                                <div className="col-sm-12">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                    >
                                        <Form.Control type="email" name="user_email" placeholder="name@example.com" required/>
                                    </FloatingLabel>
                                </div>
                                <div className="col-sm-12">
                                    <FloatingLabel controlId="floatingTextarea1" label="Message">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        name="message"
                                        style={{ height: '180px' }}
                                        required
                                        />
                                    </FloatingLabel>
                                </div>
                            </div>
                            <br />
                            <button className="w-100 btn btn-primary btn-lg" type="submit">Contact me</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
};