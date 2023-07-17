import React from "react";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <h2>DES ENTREPRISES DU MONDE ENTIER NOUS FONT CONFIANCE</h2>
          <ul className="main__companies">
            <li>Airbnb</li>
            <li>NASA</li>
            <li>Uber</li>
            <li>Target</li>
            <li>New York Times</li>
            <li>Etsy</li>
          </ul>
          <div className="main__section">
            <h3>Rassemblez votre équipe</h3>
            <p>
              Slack repose sur des canaux : des espaces organisés pour tous et tout ce dont vous avez besoin pour travailler.
              Dans les canaux, vous communiquez facilement entre les services, les bureaux, les fuseaux horaires et même avec d’autres entreprises.
            </p>
            <a href="#">En savoir plus sur les canaux</a>
          </div>
          <div className="main__section">
            <h3>Choisissez la façon dont vous souhaitez travailler</h3>
            <p>
              Slack vous offre la flexibilité de travailler en accord avec vos méthodes, vos horaires et votre localisation.
              Vous pouvez facilement discuter, envoyer des clips audio et vidéo ou participer à un appel d’équipe pour échanger en direct.
            </p>
            <a href="#">En savoir plus sur la communication flexible</a>
          </div>
          <div className="main__section">
            <h3>Gagnez du temps en centralisant vos outils en un seul endroit</h3>
            <p>
              En connectant vos autres applications à Slack, vous travaillez plus rapidement en changeant moins souvent d’onglet.
              Et grâce à des outils puissants comme le Générateur de flux de travail, vous pouvez automatiser les tâches répétitives.
            </p>
            <a href="#">En savoir plus sur la plateforme Slack</a>
          </div>
          <div className="main__section">
            <h3>Les équipes de toutes tailles font confiance à Slack</h3>
            <p>
              Slack se déploie en toute sécurité pour favoriser la collaboration dans les plus grandes entreprises du monde.
            </p>
            <a href="#">DÉCOUVREZ SLACK POUR LES ENTREPRISES</a>
            <a href="#">CONTACTER NOTRE ÉQUIPE</a>
          </div>
          <div className="main__stats">
            <div>
              <span>85%</span> des utilisateurs affirment que Slack a amélioré la communication*
            </div>
            <div>
              <span>86%</span> ressentent une amélioration de leur capacité à travailler à distance*
            </div>
            <div>
              <span>88%</span> se sentent plus connectés à leurs équipes*
            </div>
          </div>
          <p className="main__testimonial">
            « Quelle que soit la taille de votre entreprise, Slack offre une puissance incroyable dans le monde du travail hybride.
            Cet outil vous aide aussi bien à exécuter un petit programme de modernisation qu’une initiative de transformation numérique. »
            <br />
            Jennifer Quinlan
            <br />
            Associée directrice, responsable d’IBM iX - Transformation du cycle de vie client et de l’expérience, IBM
          </p>
          <a href="#">Lire plus de témoignages clients</a>
          <p className="main__disclaimer">
            * Moyenne pondérée. Sur la base de 2 707 réponses des utilisateurs Slack aux États-Unis, au Royaume-Uni,
            en Australie et au Canada avec ± 2 % de marge d’erreur à 95 % de CI (décembre 2021).
          </p>
          <a href="#" className="main__link">
            Découvrez-en davantage sur cette nouvelle façon de travailler
          </a>
          <div className="main__links">
            <a href="#">DÉCOUVRIR</a>
            <a href="#">DÉCOUVRIR</a>
            <a href="#">DÉCOUVRIR</a>
            <a href="#">DÉCOUVRIR</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
