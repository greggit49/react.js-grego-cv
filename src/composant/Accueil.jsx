import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
import Header from "../composant/Header";
import about from "../img/img/john-doe-about.jpg";
import Footer from "../composant/Footer";

function Acueil() {
  return (
    <div className="acc">
      <Header></Header>
      <div className="Jumbotron">
        <div className="overlay"></div>
        <div className="presentation">
          <h1>Bonjour, je suis John Doe</h1>
          <p>Développeur web full stack</p>
          <Button variant="primary" href="#a-propos">
            En savoir plus
          </Button>
        </div>
      </div>
      <div className="Container">
        <div className="propos Row">
          <div className="Col">
            <h2 id="a-propos" className="pro">
              À propos
            </h2>
            <hr />
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai
              suivi une formation d'
              <strong>intégrateur-développeur web </strong> au CEF. Au cours de
              cette formation, j'ai pu aquérir des bases solides pour travailer
              dans le dommaine de <strong> développement web</strong>.
            </p>
            <p>
              Basé à Lyon, je suis en recherche d'une alternance au sein d'une
              agence digital pour consolider ma formation de{" "}
              <strong> développeur web full satck</strong>.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>
          <div className="Col Col1">
            <img src={about} alt="Profil" className="about" />
            <h2>Mes compétences</h2>
            <h3>HTML5 90%</h3>
            <div class="progress">
              <div
                class="progress-bar progress-bar-custom1"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>{" "}
            <h3>CSS3 80%</h3>
            <div class="progress">
              <div
                class="progress-bar progress-bar-custom"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3>JAVASCRIPT 70%</h3>
            <div class="progress">
              <div
                class="progress-bar progress-bar-custom2"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3>PHP 60%</h3>
            <div class="progress">
              <div
                class="progress-bar progress-bar-custom3"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h3>REACT JS 50%</h3>
            <div class="progress">
              <div
                class="progress-bar progress-bar-custom4"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Acueil;