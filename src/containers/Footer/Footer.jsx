import { Container } from "react-bootstrap";

export default function Footer() {
    return(
        <div>
            <div className="b-example-divider"></div>
            <Container>
                <footer className="py-3 my-4">
                    <hr />
                    <br />
                    <p className="text-center text-muted">&copy; 2022 All rights reserved</p>
                </footer>
            </Container>
        </div>
    )
}