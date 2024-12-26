document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/events")
    .then((response) => response.json())
    .then((events) => {
      const eventList = document.getElementById("event-list");
      events.forEach((event) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${event.title}</strong> - ${event.date}<br>${event.description}`;
        eventList.appendChild(li);
      });
    })
    .catch((error) =>
      console.error("Erreur lors du chargement des événements:", error)
    );
});
