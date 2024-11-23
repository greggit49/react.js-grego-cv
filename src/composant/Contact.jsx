import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

const ContactPage = () => {
  return (
    <div>
      <Header></Header>
      <div className=" fond">
        <div className="fond1">
          <h1>ME CONTACTER</h1>
          <p className="mess">
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <hr className="hr1"></hr>
          <Row>
            <Col>
              <h2>Formulaire de contact</h2>
              <hr></hr>
              <Form>
                <Form.Group controlId="formName" className="input">
                  <Form.Control type="text" placeholder="Votre nom" />
                </Form.Group>

                <Form.Group controlId="formEmail" className="input">
                  <Form.Control
                    type="email"
                    placeholder="Votre adresse email"
                  />
                </Form.Group>

                <Form.Group controlId="formPhone" className="input">
                  <Form.Control
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                  />
                </Form.Group>

                <Form.Group controlId="formSubject" className="input">
                  <Form.Control type="text" placeholder="Sujet" />
                </Form.Group>

                <Form.Group controlId="formMessage" className="input">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Votre message"
                  />
                </Form.Group>
                <div className="boutton">
                  <Button variant="primary" type="submit" className="btn">
                    Envoyer
                  </Button>
                </div>
              </Form>
            </Col>
            <Col>
              <h2>Mes coordonnées</h2>
              <hr></hr>
              <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
              <p>06 20 30 40 50</p>
              <div>
                <iframe
                  title="Carte de localisation de John Doe"
                  width="100%"
                  height="200"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=40%20Rue%20Laure%20Diebold,%2069009%20Lyon,%20France+(John%20Doe)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;