/*
 * Volunteer Connect — simple client‑side app for discovering local volunteer
 * opportunities. Events are hard‑coded for demonstration purposes and can be
 * filtered by keyword using the search bar.
 */

const events = [
  {
    title: "Tutor Kids in Math",
    category: "education",
    description: "Help local students with math homework at the community center.",
    date: "2025-09-05",
    location: "Downtown Community Center"
  },
  {
    title: "Park Cleanup Day",
    category: "environment",
    description: "Join neighbors to pick up litter and plant trees in the city park.",
    date: "2025-09-12",
    location: "Central Park"
  },
  {
    title: "Blood Donation Drive",
    category: "health",
    description: "Donate blood at the local hospital and help save lives.",
    date: "2025-09-08",
    location: "City Hospital"
  },
  {
    title: "Food Bank Packing",
    category: "community",
    description: "Sort and pack food items at the regional food bank warehouse.",
    date: "2025-09-10",
    location: "Food Bank Warehouse"
  },
  {
    title: "Beach Clean‑up",
    category: "environment",
    description: "Help remove trash and debris from our beaches to protect marine life.",
    date: "2025-09-15",
    location: "Sunny Beach"
  },
  {
    title: "Senior Center Game Night",
    category: "community",
    description: "Spend an evening playing board games with seniors and spreading joy.",
    date: "2025-09-18",
    location: "Bright Horizons Senior Center"
  },
  {
    title: "Science Workshop for Teens",
    category: "education",
    description: "Lead hands‑on science experiments and inspire the next generation.",
    date: "2025-09-20",
    location: "Tech Library Maker Space"
  },
  {
    title: "Community Health Fair",
    category: "health",
    description: "Assist with health screenings and wellness education for families.",
    date: "2025-09-22",
    location: "Riverside Plaza"
  }
];

// Render the list of events into the DOM
function renderEvents(list) {
  const container = document.getElementById('eventsContainer');
  container.innerHTML = '';
  list.forEach(event => {
    const div = document.createElement('div');
    div.className = 'event';
    const categoryClass = `category-${event.category}`;
    div.innerHTML = `
      <span class="category ${categoryClass}">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p>${event.description}</p>
    `;
    container.appendChild(div);
  });
}

// Filter events by keyword from search input
function filterEvents() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = events.filter(event => {
    return (
      event.title.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.category.toLowerCase().includes(query)
    );
  });
  renderEvents(filtered);
}

// Initialize by rendering all events on page load
document.addEventListener('DOMContentLoaded', () => {
  renderEvents(events);
});