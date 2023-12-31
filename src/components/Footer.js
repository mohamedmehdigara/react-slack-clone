import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>Découvrez toutes les possibilités de slack</p>
        <div className="footer__buttons">
          <button className="footer__button">Essaye Gratuit</button>
          <button className="footer__button">Contacter notre équipe</button>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__section">
          <h3>Pourquoi choisir slack?</h3>
          <ul>
            <li>Comparatif slack versus email</li>
            <li>Canaux</li>
            <li>Investissement personnel</li>
            <li>Evolutivité</li>
            <li>Regarder la démonstration</li>

          </ul>
        </div>
        <div className="footer__section">
          <h3>Produit</h3>
          <ul>
            <li>Fonctionnalités</li>
            <li>Intégrations</li>
            <li>Pour les entreprises</li>
            <li>Solutions</li>

          </ul>
        </div>
        <div className="footer__section">
          <h3>Tarifs</h3>
          <ul>
            <li>Forfaits</li>
            <li>Payant vs Gratuit</li>
            
          </ul>
        </div>
        <div className="footer__section">
          <h3>Ressources</h3>
          <ul>
            <li>Partenaires</li>
            <li>Développeurs</li>
            <li>Communauté</li>
            <li>Application</li>
            <li>Blog</li>
            <li>Centre d'assistance</li>
            <li>Evénements</li>



          </ul>
        </div>
        <div className="footer__section">
          <h3>À propos de Slack</h3>
          <ul>
            <li>A propos de nous</li>
            <li>Nos dirigeants</li>
            <li>Actualités</li>
            <li>Dossiers de presse</li>
            <li>Emplois</li>


          </ul>
        </div>
        <div className="footer__bottom-links">
        <a href="#">Statut</a>
        <a href="#">Confidentialité</a>
        <a href="#">Conditions</a>
        <a href="#">Vos choix en matière de confidentialité</a>
        <a href="#">Préférences de cookies</a>
        <a href="#">Nous contacter</a>
        <a href="#">Changer de région</a>
        <a href="#">Télécharger Slack</a>
      </div>
      <p className="footer__copyright">
        ©2023 Slack Technologies, LLC, une entreprise Salesforce. Tous droits réservés. Les différentes marques commerciales appartiennent à leurs propriétaires respectifs.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
