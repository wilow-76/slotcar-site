const express = require("express");
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques (HTML, CSS, JS, etc.)
app.use(express.static("public"));
app.use(express.json()); // Pour gérer les requêtes JSON

// Tableau d'exemple pour stocker les événements
let events = [
  {
    title: "Championnat de France",
    date: "2024-12-10",
    description: "Compétition nationale de Slot Car Digital 1:32",
  },
  {
    title: "Course amicale",
    date: "2024-12-15",
    description: "Rencontre amicale de slot car au niveau local.",
  },
];

// Route pour récupérer les événements
app.get("/api/events", (req, res) => {
  res.json(events); // Retourner les événements au format JSON
});

// Route pour ajouter un événement
app.post("/api/events", (req, res) => {
  const { title, date, description, endDate, endTime, time } = req.body;

  // Vérifier que tous les champs nécessaires sont présents
  if (!title || !date || !description || !endDate || !endTime || !time) {
    return res.status(400).json({ error: "Tous les champs sont obligatoires" });
  }

  const newEvent = { title, date, description, endDate, endTime, time };
  events.push(newEvent); // Ajouter l'événement au tableau

  res.status(201).json(newEvent); // Retourner l'événement ajouté
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
