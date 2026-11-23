
import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [envoiEnCours, setEnvoiEnCours] = useState(false)
  const [messageRetour, setMessageRetour] = useState('')
  const [erreur, setErreur] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    setEnvoiEnCours(true)
    setMessageRetour('')
    setErreur(false)

    const formulaire = event.currentTarget
    const donnees = new FormData(formulaire)

    const message = {
      nom: donnees.get('name'),
      email: donnees.get('email'),
      sujet: donnees.get('subject'),
      message: donnees.get('message'),
    }

    try {
      const reponse = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })

      const resultat = await reponse.json()

      if (!reponse.ok) {
        throw new Error(resultat.message || 'Une erreur est survenue.')
      }

      setMessageRetour('Votre message a bien été reçu. Merci !')
      formulaire.reset()
    } catch (error) {
      setErreur(true)
      setMessageRetour(
        error.message || 'Impossible de contacter le serveur. Réessayez plus tard.'
      )
    } finally {
      setEnvoiEnCours(false)
    }
  }

  return (
    <main className="inner-page contact-page">
      <p className="eyebrow">CONTACT</p>
      <h1>Parlons de votre projet.</h1>
      <p className="page-intro">
        Décrivez votre idée et les besoins de votre projet.
        SYLS Studio vous répondra prochainement.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Votre nom</label>
        <input id="name" name="name" type="text" maxLength="100" required />

        <label htmlFor="email">Votre adresse e-mail</label>
        <input id="email" name="email" type="email" maxLength="150" required />

        <label htmlFor="subject">Votre projet concerne</label>
        <select id="subject" name="subject" required defaultValue="">
          <option value="" disabled>Choisir un service</option>
          <option value="publicite">Publicité vidéo IA</option>
          <option value="site-web">Création de site web</option>
          <option value="autre">Autre demande</option>
        </select>

        <label htmlFor="message">Votre message</label>
        <textarea id="message" name="message" rows="6" maxLength="3000" required />

        <button
          type="submit"
          className="button-primary"
          disabled={envoiEnCours}
        >
          {envoiEnCours ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {messageRetour && (
          <p role="status" aria-live="polite" style={{ color: erreur ? '#B42318' : '#287A45' }}>
            {messageRetour}
          </p>
        )}
      </form>
    </main>
  )
}

export default Contact
