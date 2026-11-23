
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Realisation from './pages/Realisation'
import Services from './pages/Services'
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          SYLS<span> Studio</span>
        </Link>

        <nav className="navigation">
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/#realisations">Réalisations</Link>
          <Link to="/apropos">À propos</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/contact" className="header-button">
          Parlons de votre projet
        </Link>
      </header>

      {children}

      <footer className="footer">
        <Link to="/" className="logo">
          SYLS<span> Studio</span>
        </Link>
        <p>La créativité au service de vos idées.</p>
        <p>© 2026 SYLS Studio. Tous droits réservés.</p>
      </footer>
    </>
  )
}

function Accueil() {
  return (
    <Layout>
      <main>
        <section className="hero-section" id="accueil">
          <p className="eyebrow">STUDIO CRÉATIF · IMAGE · DIGITAL</p>
          <h1>
            La créativité au service de vos <span>idées.</span>
          </h1>
          <p className="hero-description">
            Nous donnons vie à vos idées grâce à la création publicitaire
            avec l'intelligence artificielle et au développement web.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="button-primary">
              Découvrir nos services
            </Link>
            <Link to="/contact" className="button-secondary">
              Nous contacter
            </Link>
          </div>
          <p className="hero-note">
            Des idées qui deviennent des expériences.
          </p>
        </section>

        <section className="services-section" id="publicites">
          <p className="eyebrow">NOS EXPERTISES</p>
          <h2>La créativité sous toutes ses formes.</h2>
          <div className="services-grid">
            <article className="service-card">
              <span className="service-number">01</span>
              <h3>Publicités vidéo IA</h3>
              <p>
                Des créations publicitaires élégantes et immersives
                pour mettre en valeur vos produits.
              </p>
              <Link to="/services">Découvrir le service ↗</Link>
            </article>
            <article className="service-card">
              <span className="service-number">02</span>
              <h3>Création de sites web</h3>
              <p>
                Des sites modernes, responsives et conçus pour
                présenter votre activité avec élégance.
              </p>
              <Link to="/services">Découvrir le service ↗</Link>
            </article>
          </div>
        </section>

        <section className="portfolio-section" id="realisations">
          <p className="eyebrow">NOTRE UNIVERS CRÉATIF</p>
          <h2>Des créations qui donnent vie aux idées.</h2>
          <p className="portfolio-intro">
            Découvrez nos univers créatifs et nos projets en publicité
            vidéo IA et développement web.
          </p>

          <div className="portfolio-grid">
            <article className="portfolio-card">
              <Link to="/realisations/goldea" className="portfolio-card-link">
                <div className="portfolio-visual perfume-visual">
                  <span>01 — PUBLICITÉ IA</span>
                  <h3>Parfums & beauté</h3>
                  <p>L'élégance en mouvement.</p>
                </div>
                <div className="portfolio-info">
                  <h3>Parfums et cosmétiques</h3>
                  <p>Galerie en préparation</p>
                </div>
              </Link>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-visual product-visual">
                <span>02 — PUBLICITÉ IA</span>
                <h3>Produits & gastronomie</h3>
                <p>L'art de mettre en valeur.</p>
              </div>
              <div className="portfolio-info">
                <h3>Produits et alimentation</h3>
                <p>Galerie en préparation</p>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-visual web-visual">
                <span>03 — PUBLICITÉ IA</span>
                <h3>Mode & accessoires</h3>
                <p>Le style prend vie.</p>
              </div>
              <div className="portfolio-info">
                <h3>Mode et accessoires</h3>
                <p>Galerie en préparation</p>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-visual product-visual">
                <span>04 — CRÉATION IA</span>
                <h3>Univers créatifs</h3>
                <p>L'imagination sans limites.</p>
              </div>
              <div className="portfolio-info">
                <h3>Autres créations publicitaires</h3>
                <p>Galerie en préparation</p>
              </div>
            </article>

            <article className="portfolio-card">
              <div className="portfolio-visual web-visual">
                <span>05 — DÉVELOPPEMENT WEB</span>
                <h3>Projets web</h3>
                <p>Des expériences digitales.</p>
              </div>
              <div className="portfolio-info">
                <h3>Création de sites web</h3>
                <p>Projets en préparation</p>
              </div>
            </article>
          </div>
        </section>

        <section className="about-section" id="apropos">
          <p className="eyebrow">À PROPOS DE SYLS STUDIO</p>
          <h2>Imaginer. Créer. Donner vie.</h2>
          <p>
            SYLS Studio est un univers créatif qui associe
            imagination, technologie et sens du détail.
          </p>
          <Link to="/apropos">En savoir plus ↗</Link>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">UN PROJET EN TÊTE ?</p>
          <h2>Créons quelque chose d'unique.</h2>
          <Link to="/contact" className="button-primary">
            Nous contacter
          </Link>
        </section>
      </main>
    </Layout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/apropos" element={<Layout><Apropos /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/realisations/:slug" element={<Layout><Realisation /></Layout>} />
      <Route path="*" element={<Layout><main className="inner-page"><h1>Page introuvable</h1><Link to="/">Retour à l'accueil</Link></main></Layout>} />
    </Routes>
  )
}

export default App
