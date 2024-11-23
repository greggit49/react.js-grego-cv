import Accordion from "react-bootstrap/Accordion";
import Footer from "./Footer";
import Header from "./Header";

function MentionsLegales() {
  return (
    <div>
      <Header></Header>
      <h1>MENTION LEGALES</h1>
      <hr className="hr1" />
      <Accordion defaultActiveKey="0" className="accor">
        <Accordion.Item eventKey="0">
          <Accordion.Header>L'éditeur du site:</Accordion.Header>
          <Accordion.Body>
            <h2>John Doe</h2>
            <p>
              40 Rue Laure Diebold <br /> 69009 Lyon, France
            </p>
            <p>Téléphone : 06 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <h2>Always Data</h2>
            <p>
              91 rue du Faubourg Saint Honnoré <br /> 75008 Paris
            </p>
            <a href="https://www.alwaysdata.com/fr/">www.alwaysdata.com</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h2>Crédits</h2>
            <p>Site développé pas John Doe, étudiant du CEF.</p>
            <p>
              Les images libres de droit son issues du site
              <a href="https://pixabay.com/fr/"> Pixbay.</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Footer></Footer>
    </div>
  );
}

export default MentionsLegales;