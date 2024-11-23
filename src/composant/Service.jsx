import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../App";
import fichier from "../img/icons8-code-file-48.png";
import ordi from "../img/icons8-monitor-48.png";
import loupe from "../img/icons8-profit-analysis-50.png";
import banner2 from "../img/img/banner-mobile.jpg";
import banner1 from "../img/img/banner-tablette.jpg";
import banner from "../img/img/banner.jpg";
import Footer from "./Footer";

import Header from "./Header";

function Services() {
  return (
    <div>
      <Header></Header>

      <picture className="imag">
        <source media="(min-width: 768px)" srcSet={banner} />
        <source media="(min-width: 576px)" srcSet={banner1} />
        <img src={banner2} alt="" className="imag" />
      </picture>
      <div className="ser">
        <h1>MON OFFRE DE SERVICES</h1>
        <p className="mess">
          Voici les prestations sur lesquelles je peux intervenir.
        </p>
        <hr className="hr1" />
        <Row>
          <Col>
            <Card>
              <Card.Body className="serv">
                <img src={ordi} alt="" className="ima" />
                <Card.Title>
                  <h1>UX DESIGN</h1>
                </Card.Title>
                <Card.Text>
                  Le UX Design est une méthode de conception centrée sur
                  l’utilisateur. Son but est d’offrir une expérience de
                  navigation optimale à l’internaute.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="serv">
                <img src={fichier} alt="" className="ima" />
                <Card.Title>
                  <h1>DÉVELOPPEMENT WEB</h1>
                </Card.Title>
                <Card.Text>
                  Le développement de sites web repose sur l’utilisation des
                  langages HTML, CSS, JavaScript et PHP.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="serv">
                <img src={loupe} alt="" className="ima" />
                <Card.Title>
                  <h1>RÉFÉRENCEMENT</h1>
                </Card.Title>
                <Card.Text>
                  Le référencement naturel d’un site, aussi appelé SEO, consiste
                  à mettre en place des techniques en oeuvre pour améliorer sa
                  position dans les résultats des moteurs de recherche.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Services;