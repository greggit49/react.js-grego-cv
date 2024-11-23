import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import coder from "../img/img/blog/coder.jpg";
import croissance from "../img/img/blog/croissance.jpg";
import google from "../img/img/blog/google.jpg";
import screens from "../img/img/blog/screens.jpg";
import seo from "../img/img/blog/seo.jpg";
import technos from "../img/img/blog/technos.png";

function CardExample({ title, image, description }) {
  const cardsData = [
    {
      title: "Coder son site en HTML/CSS",
      image: coder,
      description:
        " Some quick exemple text to build on the card title and make up the bulk of the card's content. ",
      publier: "Publié le 22 août 2022",
    },
    {
      title: "Vendre ses produits sur le web",
      image: croissance,
      description:
        "Some quick exemple text to build on the card title and make up the bulk of the card's content.",
      publier: "Publié le 20 août 2022",
    },
    {
      title: "Se positionner sur Google",
      image: google,
      description:
        "Some quick exemple text to build on the card title and make up the bulk of the card's content.",
      publier: "Publié le 1 août 2022",
    },
    {
      title: "Coder en responsive design",
      image: screens,
      description:
        "Some quick exemple text to build on the card title and make up the bulk of the card's content.",
      publier: "Publié le 31 juillet 2022",
    },
    {
      title: "techniques de référencement",
      image: seo,
      description:
        "Some quick exemple text to build on the card title and make up the bulk of the card's content.",
      publier: "Publié le 30 juillet 2022",
    },
    {
      title: "Aprendre à coder ",
      image: technos,
      description:
        " Les technologie de nos jours sont basé sur différent langages de codes ...",
      publier: "Publié le 12 juillet 2022",
    },
  ];
  return (
    <div className="container">
      <div className="row ">
        {cardsData.map((card, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 cards " key={index}>
            <Card style={{ width: "100%" }} className="card ">
              <Card.Img
                variant="top"
                src={card.image}
                className="card-Img-top"
              />
              <Card.Body className="card-body">
                <Card.Title className=" texte">{card.title}</Card.Title>
                <Card.Text className=" texte">{card.description}</Card.Text>
                <Button variant="primary" className="btn texte">
                  Lire la suite
                </Button>
              </Card.Body>
              <Card.Footer className="publi">
                <small className="text-muted">{card.publier}</small>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardExample;