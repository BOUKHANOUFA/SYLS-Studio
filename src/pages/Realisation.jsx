
import { Link, useParams } from 'react-router-dom'
import './Realisation.css'

const projets = {
  goldea: {
    titre: 'Goldéa',
    categorie: 'Publicité vidéo IA',
    description:
      "Un concept publicitaire autour d'un parfum inspiré par l'élégance et l'éclat de l'or.",
    statut: 'Projet en préparation',
  },
}

function Realisation() {
  const { slug } = useParams()
  const projet = projets[slug?.toLowerCase()]

  if (!projet) {
    return (
      <main className="realisation-page">
        <h1>Projet introuvable</h1>
        <Link to="/">Retour à l'accueil</Link>
      </main>
    )
  }

  return (
    <main className="realisation-page">
      <Link to="/#realisations" className="back-link">
        ← Retour aux réalisations
      </Link>

      <p className="eyebrow">{projet.categorie}</p>
      <h1>{projet.titre}</h1>

      <p className="realisation-description">
        {projet.description}
      </p>

      <div className="realisation-media">
        <p>Présentation du projet</p>
        <span>{projet.statut}</span>
      </div>

      <Link to="/#contact" className="button-primary">
        Parlons de votre projet
      </Link>
    </main>
  )
}

export default Realisation

