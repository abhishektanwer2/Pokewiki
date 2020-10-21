import React from "react";
import { Container, Row, Col } from "reactstrap";
const Footer = (props) => {
  return (
    <div className="footer-dark">
      <Container>
        <Row>
          <Col className="item" sm="6" md="3">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Development</a>
              </li>
              <li>
                <a href="#">Hosting</a>
              </li>
            </ul>
          </Col>
          <Col className="item" sm="6" md="3">
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </Col>
          <Col className="item" sm="6" md="3">
            <h3>Company Name</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
