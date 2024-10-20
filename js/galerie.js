const events = [
  {
      title: "Concert in Prague",
      date: "2024-05-01",
      imageUrl: "events/event1/images/DSC04634-Enhanced-NR-2",
      tags: ["#2024", "#concert"],
  },
  {
      title: "Wedding in Brno",
      date: "2024-06-15",
      imageUrl: "wedding.jpg",
      tags: ["#2024", "#wedding"],
  },
  // Add more events here
];

function displayEvents(filteredEvents) {
  const container = document.getElementById('eventsContainer');
  container.innerHTML = ""; // Clear existing content

  filteredEvents.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.className = 'event-item';
      eventDiv.innerHTML = `
          <h3>${event.title}</h3>
          <p>${event.date}</p>
          <img src="${event.imageUrl}" alt="${event.title}" />
      `;
      container.appendChild(eventDiv);
  });
}

function filterEvents(selectedTags) {
  const filteredEvents = events.filter(event => 
      selectedTags.every(tag => event.tags.includes(tag))
  );

  displayEvents(filteredEvents);
}

function showAllEvents() {
  displayEvents(events); // Show all events
}

// Initial display of all events
window.onload = () => displayEvents(events);
