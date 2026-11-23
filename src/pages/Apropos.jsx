
import { Link } from 'react-router-dom'
import './Apropos.css'

function Apropos() {
  return (
    <main className="inner-page about-page">
      <p className="eyebrow">À PROPOS DE SYLS STUDIO</p>
      <h1>Imaginer. Créer. Donner vie.</h1>

      <p className="page-intro">
        SYLS Studio est un studio créatif indépendant qui associe
        imagination, technologie et sens du détail.
      </p>

      <section className="about-content">
        <div>
          <p className="eyebrow">NOTRE UNIVERS</p>
          <h2>La créativité au service de vos idées.</h2>
        </div>
        <div>
          <p>
            Nous explorons les possibilités de la création visuelle
            assistée par intelligence artificielle et du développement
            web pour imaginer des expériences digitales modernes.
          </p>
          <p>
            Chaque projet est pensé avec une attention particulière
            portée à l'identité visuelle, à la simplicité et à la qualité
            de l'expérience.
          </p>
        </div>
      </section>

      <section className="about-values">
        <article>
          <span>01</span>
          <h3>Créativité</h3>
          <p>Imaginer des univers visuels singuliers.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Élégance</h3>
          <p>Privilégier un design soigné et intemporel.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Technologie</h3>
          <p>Utiliser les outils numériques avec intention.</p>
        </article>
      </section>

      <Link to="/contact" className="button-primary">
        Parlons de votre projet
      </Link>
    </main>
  )
}

export default Apropos
