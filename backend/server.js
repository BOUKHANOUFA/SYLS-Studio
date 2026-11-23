
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const rateLimit = require('express-rate-limit')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Connexion à Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Autoriser le site React à communiquer avec le backend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
}))

// Lire les données JSON
app.use(express.json({ limit: '10kb' }))
// Limiter les envois du formulaire pour éviter le spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {
    success: false,
    message: 'Trop de messages envoyés. Réessayez dans 15 minutes.',
  },
})

app.use('/api/contact', contactLimiter)

// Route d'accueil
app.get('/', (req, res) => {
  res.json({
    message: 'Bienvenue sur le backend de SYLS Studio !',
  })
})

// Route du formulaire de contact
app.post('/api/contact', async (req, res) => {
  const { nom, email, sujet, message } = req.body

  // Vérifier les champs obligatoires
  if (
    typeof nom !== 'string' ||
    typeof email !== 'string' ||
    typeof sujet !== 'string' ||
    typeof message !== 'string' ||
    !nom.trim() ||
    !email.trim() ||
    !sujet.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: 'Tous les champs sont obligatoires.',
    })
  }

  // Vérifier l'adresse e-mail
  const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailValide.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'Adresse e-mail invalide.',
    })
  }

  // Vérifier la longueur des champs
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

  try {
    // Envoyer le message vers ton adresse Gmail
    await transporter.sendMail({
      from: `"SYLS Studio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email.trim(),
      subject: `Nouveau message SYLS Studio : ${sujet.trim()}`,
      text: `
Nouveau message reçu depuis le site SYLS Studio.

Nom : ${nom.trim()}
E-mail : ${email.trim()}
Sujet : ${sujet.trim()}

Message :
${message.trim()}
      `,
    })

    console.log('E-mail envoyé avec succès !')

    return res.status(200).json({
      success: true,
      message: 'Votre message a bien été envoyé. Merci !',
    })
  } catch (error) {
    console.error('Erreur lors de l’envoi de l’e-mail :', error.message)

    return res.status(500).json({
      success: false,
      message: 'Impossible d’envoyer votre message pour le moment.',
    })
  }
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
