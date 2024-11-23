import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App";
import Banner from "../img/img/banner.jpg";
import Bienetre from "../img/img/portfolio/espace-bien-etre.jpg";
import Marcher from "../img/img/portfolio/fresh-food.jpg";
import Resto from "../img/img/portfolio/restaurant-japonais.jpg";

import Footer from "./Footer";
import Header from "./Header";

function BasicExample() {
  return (
    <div className="row">
      <Header />
      <img src={Banner} alt="" />
      <h1>PORTFOLIO</h1>
      <p className="mess">Voici quelques-une de mes réalisations.</p>
      <hr className="hr1" />
      <div className="row">
        <div className="row1 col-lg-4 col-md-6 col-sm-12">
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img className="card-img-top" variant="top" src={Bienetre} />
            <Card.Body className="card-body">
              <Card.Title>Fresh food</Card.Title>
              <Card.Text className="texte">
                Réalisation d'un site avec commande en ligne.
              </Card.Text>
              <Button className="btn" variant="primary">
                Voir
              </Button>
            </Card.Body>
            <Card.Footer className="publi">
              <small className="text-muted">
                Site réalisé avec PHP et MySQL
              </small>
            </Card.Footer>
          </Card>
        </div>
        <div className="row1 col-lg-4 col-md-6 col-sm-12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Marcher} />
            <Card.Body>
              <Card.Title>Restaurant Akira</Card.Title>
              <Card.Text>Réalisation d'un site vitrine.</Card.Text>
              <Button variant="primary">Voir </Button>
            </Card.Body>
            <Card.Footer className="publi">
              <small className="text-muted">Site réalisé avec WordPress</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="row1 col-lg-4 col-md-6 col-sm-12">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Resto} />
            <Card.Body>
              <Card.Title>Espace bien-être</Card.Title>
              <Card.Text>
                Réalisation d'un site vitrine pour un patricien de bien-être.
              </Card.Text>
              <Button variant="primary">Voir</Button>
            </Card.Body>
            <Card.Footer className="publi">
              <small className="text-muted">Site réalisé en HTML/CSS</small>
            </Card.Footer>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BasicExample;