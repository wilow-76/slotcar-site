document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("fullcalendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth", // Vue par défaut
    events: "/events", // Récupère les événements du serveur
    editable: true,
    droppable: true,
  });

  calendar.render();
});
