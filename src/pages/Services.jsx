
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  return (
    <main className="inner-page services-page">
      <p className="eyebrow">NOS EXPERTISES</p>
      <h1>Des idées créatives, des solutions digitales.</h1>
      <p className="page-intro">
        SYLS Studio associe création visuelle et développement web
        pour donner vie à vos projets.
      </p>

      <div className="services-detail-grid">
        <article className="service-detail">
          <span>01 — CRÉATION VISUELLE</span>
          <h2>Publicités vidéo IA</h2>
          <p>
            Des concepts publicitaires créatifs pour présenter vos
            produits à travers des univers visuels élégants.
          </p>
          <ul>
            <li>Concept et direction artistique</li>
            <li>Création d'images avec l'IA</li>
            <li>Conception de vidéos publicitaires</li>
            <li>Adaptation aux formats numériques</li>
          </ul>
          <Link to="/realisations/goldea">Voir un projet ↗</Link>
        </article>

        <article className="service-detail">
          <span>02 — DÉVELOPPEMENT DIGITAL</span>
          <h2>Création de sites web</h2>
          <p>
            Des sites modernes et responsives pour présenter votre
            activité et votre identité.
          </p>
          <ul>
            <li>Sites vitrines personnalisés</li>
            <li>Intégration HTML et CSS</li>
            <li>Développement React</li>
            <li>Adaptation ordinateur et mobile</li>
          </ul>
          <Link to="/#realisations">Voir les réalisations ↗</Link>
        </article>
      </div>

      <section className="services-callout">
        <h2>Un projet en tête ?</h2>
        <p>Parlons ensemble de votre idée.</p>
        <Link to="/contact" className="button-primary">
          Nous contacter
        </Link>
      </section>
    </main>
  )
}

export default Services
