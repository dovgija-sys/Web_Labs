const divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
	if (!divs[i].closest(".start-panel") && divs[i].textContent.trim() !== "") {
		divs[i].textContent += "...";
	}
}

const table = document.getElementById("editable-table");

table.addEventListener("click", function (event) {
	const cell = event.target.closest("td");

	if (!cell || cell.querySelector("input")) {
		return;
	}

	const input = document.createElement("input");
	input.type = "text";
	input.value = cell.textContent;

	const saveButton = document.createElement("button");
	saveButton.type = "button";
	saveButton.textContent = "Зберегти";

	cell.textContent = "";
	cell.append(input, saveButton);
	input.focus();

	saveButton.addEventListener("click", function () {
		cell.textContent = input.value;
	});
});