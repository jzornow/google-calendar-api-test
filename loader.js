function eventToListItem(e) {
	if (e.start?.date) {
		return `<li class="event"><b>${e.start.date}</b> - ${e.summary}</li>`
	} else {
		return '';
	}
}

function formatAndInsertEvents(events) {
	events.forEach((event) => container.innerHTML += eventToListItem(event))
}

async function main() {
	var container = document.getElementById("container");

	var key = 'AIzaSyC_fsoVp6Xc0QIULYjipM6RCiM7buNB5sg';
	var calendarId = 'c_9i2rm4qmoedm3nh3df85fkbuf8@group.calendar.google.com';
	var timeMin = new Date().toISOString();

	var url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${key}&timeMin=${timeMin}`;

	await fetch(url, { method: "GET" })
		.then((response) => response.json())
		.then((json) => formatAndInsertEvents(json.items));
}

main();
