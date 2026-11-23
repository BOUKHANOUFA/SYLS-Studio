
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          SYLS<span> Studio</span>
        </a>

        
<nav className="navigation">
  <a href="#accueil">Accueil</a>
  <a href="#publicites">Services</a>
  <a href="#realisations">Réalisations</a>
  <a href="#apropos">À propos</a>
  <a href="#contact">Contact</a>
</nav>


        <a href="#contact" className="header-button">
          Parlons de votre projet
        </a>
      </header>

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
            <a href="#publicites" className="button-primary">
              Découvrir nos créations
            </a>

            <a href="#contact" className="button-secondary">
              Nous contacter
            </a>
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
              <a href="#contact">Découvrir le service ↗</a>
            </article>

            <article className="service-card" id="sites-web">
              <span className="service-number">02</span>
              <h3>Création de sites web</h3>
              <p>
                Des sites modernes, responsives et conçus pour
                présenter votre activité avec élégance.
              </p>
              <a href="#contact">Découvrir le service ↗</a>
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
      <div className="portfolio-visual perfume-visual">
        <span>01 — PUBLICITÉ IA</span>
        <h3>Parfums & beauté</h3>
        <p>L'élégance en mouvement.</p>
      </div>
      <div className="portfolio-info">
        <h3>Parfums et cosmétiques</h3>
        <p>Galerie en préparation</p>
      </div>
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
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">UN PROJET EN TÊTE ?</p>
          <h2>Créons quelque chose d'unique.</h2>
          <a href="mailto:contact@syls-studio.fr" className="button-primary">
            Nous contacter
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="/" className="logo">
          SYLS<span> Studio</span>
        </a>
        <p>La créativité au service de vos idées.</p>
        <p>© 2026 SYLS Studio. Tous droits réservés.</p>
      </footer>
    </>
  )
}

export default App
