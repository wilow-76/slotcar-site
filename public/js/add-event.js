document.getElementById("event-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Récupérer les données du formulaire
  var title = document.getElementById("title").value;
  var dateStart = document.getElementById("date-start").value;
  var timeStart = document.getElementById("time-start").value;
  var dateEnd = document.getElementById("date-end").value;
  var timeEnd = document.getElementById("time-end").value;
  var description = document.getElementById("description").value;

  var eventData = {
    title: title,
    start: `${dateStart}T${timeStart}`,
    end: `${dateEnd}T${timeEnd}`,
    description: description,
  };

  // Envoyer les données au serveur
  fetch("/add-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Événement ajouté avec succès!");
      window.location.href = "calendar.html"; // Redirige vers le calendrier
    })
    .catch((error) => console.error("Erreur:", error));
});
