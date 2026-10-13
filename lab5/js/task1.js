const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
const EXHIBITION_LENGTH = 7;

const topics = [
	"Мистецтво сучасного живопису",
	"Світ науки та технологій",
	"Історія українського мистецтва"
];
const venues = [
	"Міська галерея",
	"Виставковий центр «Простір»",
	"Музей історії міста"
];
const organizers = [
    "Культурний центр", 
    "ТОВ \"Культурний Світ\"", 
    "Міський музей"];
const daysUntilStart = [-10, -2, 3];

const exhibitionList = document.getElementById("exhibition-list");
const todayList = document.getElementById("today-list");
const today = new Date();
today.setHours(0, 0, 0, 0);

if (!exhibitionList || !todayList) {
	throw new Error("Не знайдено списки для виведення виставок.");
}

for (let i = 0; i < topics.length; i++) {
	const startDate = new Date(today);
	startDate.setDate(startDate.getDate() + daysUntilStart[i]);

	const closingDate = new Date(startDate);
	closingDate.setDate(closingDate.getDate() + EXHIBITION_LENGTH);

	const daysToStart = Math.round((startDate - today) / MILLISECONDS_IN_DAY);
	const daysToClose = Math.round((closingDate - today) / MILLISECONDS_IN_DAY);
	const exhibition = document.createElement("li");

	let status;
	if (daysToStart > 0) {
		status = `До початку залишилося днів: ${daysToStart}.`;
	} else if (daysToClose > 0) {
		status = "Виставка проводиться сьогодні.";
	} else {
		status = "Виставка вже завершилася.";
	}

	const organizer = organizers[i] || "Організатора не вказано.";
	exhibition.textContent =
		`Тема: ${topics[i]}. Місце: ${venues[i]}. ` +
		`Організатор: ${organizer}. Початок: ${startDate.toLocaleDateString("uk-UA")}. ` +
		status;
	exhibitionList.appendChild(exhibition);

	if (daysToStart <= 0 && daysToClose > 0) {
		const todayExhibition = document.createElement("li");
		todayExhibition.textContent =
			`${topics[i]} — ${venues[i]}. До закриття залишилося днів: ${daysToClose}.`;
		todayList.appendChild(todayExhibition);
	}
}

if (todayList.children.length === 0) {
	const message = document.createElement("li");
	message.textContent = "Сьогодні виставок немає.";
	todayList.appendChild(message);
}
