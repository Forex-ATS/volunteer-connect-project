# Volunteer Connect

Volunteer Connect is a simple web app built with HTML, CSS and JavaScript that helps you discover local volunteering opportunities across a variety of causes. The app lists a curated set of events organised by volunteers and community organisations. You can browse events by category, search by keyword and learn where and when to get involved. Since it runs entirely in the browser without any back‑end services, it's easy to host and accessible on any modern device.

## How it works

The app maintains a small array of sample events inside `script.js`. Each event contains a title, category, description, date and location. When the page loads, a JavaScript function renders these events into the page. A search input allows you to filter events by any keyword in the title, description or category. The UI is styled with a lightweight CSS file and uses basic flexbox layout.

## Files

* `index.html` – The main entry point that defines the page structure and links the style and script files.
* `style.css` – Provides basic styling for the header, event cards and layout.
* `script.js` – Contains the data and functions used to render and filter events.

## Running locally

To run the app locally, simply open `index.html` in your web browser. No server is required because all functionality is implemented client‑side.

## Extending the project

This sample demonstrates a foundation for a more fully featured volunteering platform. Ideas for improvement include:

* Persisting events and personal favourite lists using browser localStorage or an external API.
* Adding sign‑in and user profiles for volunteers and organisers.
* Allowing organisers to submit new events through a form.
* Sorting and filtering by date, location or cause.

By open sourcing this project, we hope to encourage others to build upon it and create tools that connect people with meaningful opportunities to make a difference.
