import { Container, Nav, Navbar } from "react-bootstrap";

const Links = () => (
    <>
        <Nav.Link href="#aboutme">About Me</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact me</Nav.Link>
    </>
)

export default function Menu() {
    return (
        <Navbar variant="light" expand="lg" fixed="top" style={{ backgroundColor: "white"}} >
            <Container>
                <Navbar.Brand href="#">My portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse  className="justify-content-end">
                    <Nav className="text-center">
                        <Links/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}