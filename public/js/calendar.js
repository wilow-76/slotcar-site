document.addEventListener("DOMContentLoaded", function () {
  // Initialiser le calendrier FullCalendar
  var calendarEl = document.getElementById("fullcalendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth", // Vue initiale (mois par défaut)
    events: [
      // Exemple d'événements (ajustez avec vos propres événements)
      {
        title: "Championnat de France - Manche 1",
        start: "2024-01-15",
        description: "Premier événement du championnat de France.",
        location: "Circuit A",
      },
      {
        title: "Course Open - Event A",
        start: "2024-02-05",
        description: "Ouvert à tous les participants.",
        location: "Circuit B",
      },
      // Ajoutez d'autres événements ici
    ],
  });

  // Afficher le calendrier
  calendar.render();
});
