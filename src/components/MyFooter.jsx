import { Col } from "react-bootstrap";
import { Container, Row, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // importa anche icon-bootstrap

const Myfooter = () => {
  return (
    <footer className=" bg-black text-secondary">
      <Container className="mt-5 ">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Row>
              <Col className="mb-2 text-center">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4">
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">Audio and Subtitles</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Media Center</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Privacy</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Contact us</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">Audio Description</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Investor Relations</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Legal Notices</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">Help Center</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Jobs</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Cookie Preferences</a>
                </p>
              </Col>
              <Col className="footer-links">
                <p>
                  <a href="#" alt="footer link">Gift Cards</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Terms of Use</a>
                </p>
                <p>
                  <a href="#" alt="footer link">Corporate Information</a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 text-center">
                <Button variant="outline-light" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 text-center copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Myfooter;
