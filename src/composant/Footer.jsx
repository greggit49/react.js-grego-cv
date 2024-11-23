import React, { useEffect, useState } from "react";
import git from "../img/icons8-github-48.png";
import lin from "../img/icons8-linkedin-48.png";
import twit from "../img/icons8-twitter-48.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset> 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="footer">
      <div className="footer-column ">
        <div>
          <h4>John Doe</h4>
          <p>40 Rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>Téléphone : 06 20 30 40 50</p>

          <a href="https://github.com/github-john-doe">
            {" "}
            <img src={git} alt="GitHub" />
          </a>
          <a href="https://twitter.com/?lang=fr">
            <img src={twit} alt="Twiter" />
          </a>
          <a href="https://fr.linkedin.com">
            <img src={lin} alt="Linkedin" />
          </a>
        </div>
        <div>
          <h4>Liens utiles</h4>
          <ul>
            <li>
              {" "}
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/">A propos</a>
            </li>
            <li>
              <a href="/Service">Services</a>
            </li>
            <li>
              <a href="/Contact">Me contacter</a>
            </li>
            <li>
              <a href="/Mantion Legale">Mentions légales</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Mes dernières réalisations</h4>
          <ul>
            <li>
              {" "}
              <a href="/realisation"> Fresh food </a>
            </li>
            <li>
              <a href="/realisation">Restaurant Akira</a>
            </li>
            <li>
              <a href="/realisation">Espace bien-être</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Mes derniers articles</h4>
          <ul>
            <li>
              {" "}
              <a href="/Blog">Coder son site en HTML/CSS</a>
            </li>
            <li>
              {" "}
              <a href="/Blog">Vendre ses produits sur le web</a>
            </li>
            <li>
              {" "}
              <a href="/Blog">Se positionner sur Google</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">
        <p className="copyr">© Designed by John Doe</p>
        <div className="scroll-to-top">
          {isVisible && <div onClick={scrollToTop}>revenir en haut</div>}
        </div>
      </div>
    </div>
  );
};

export default Footer;