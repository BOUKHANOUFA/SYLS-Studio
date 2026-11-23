
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Autoriser le site React à communiquer avec le backend
app.use(cors({
  origin: 'http://localhost:5173',
}))

// Lire les données JSON
app.use(express.json({ limit: '10kb' }))

// Route d'accueil
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur le backend de SYLS Studio !',
  })
})

// Route du formulaire de contact
app.post('/api/contact', (req, res) => {
  const { nom, email, sujet, message } = req.body

  // Vérifier les champs obligatoires
  if (!nom || !email || !sujet || !message) {
    return res.status(400).json({
      success: false,
      message: 'Tous les champs sont obligatoires.',
    })
  }

  // Vérifier le format de l'adresse e-mail
  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailValide.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Adresse e-mail invalide.',
    })
  }

  // Vérifier les longueurs des champs
  if (
    nom.length > 100 ||
    email.length > 150 ||
    sujet.length > 150 ||
    message.length > 3000
  ) {
    return res.status(400).json({
      success: false,
      message: 'Un ou plusieurs champs sont trop longs.',
    })
  }

  // Pour le moment, on vérifie et reçoit les données.
  // L'envoi par e-mail sera ajouté ensuite.
  console.log('Nouveau message reçu :', {
    nom,
    email,
    sujet,
    message,
  })

  res.status(200).json({
    success: true,
    message: 'Les données du formulaire ont bien été reçues par le serveur.',
  })
})

// Route inconnue
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route introuvable.',
  })
})

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur SYLS Studio démarré sur le port ${PORT}`)
})
