document
  .getElementById("event-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const startTime = document.getElementById("start-time").value;
    const endTime = document.getElementById("end-time").value;
    const description = document.getElementById("description").value;

    const eventData = {
      title,
      date: startDate,
      endDate,
      startTime,
      endTime,
      description,
    };

    fetch("http://localhost:3000/add-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Événement ajouté avec succès!");
        window.location.href = "calendar.html"; // Rediriger vers le calendrier après ajout
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout de l'événement:", error);
        alert("Une erreur est survenue");
      });
  });
