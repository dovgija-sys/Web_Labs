const CLOUD_URL = "https://api.jsonbin.io/v3/b/6aeb396fac6210605a6bec8c";
const HEADERS = {};
class Department {
    constructor({ name, faculty, head }) {
    this.name = name;
    this.faculty = faculty;
    this.head = head;
}

toHTML() {
    return `<li>${this.name} <span class="head">— зав. кафедри: ${this.head}</span></li>`;
}
}

async function loadData() {
const r = await fetch(CLOUD_URL, { headers: HEADERS });
if (!r.ok) throw new Error("HTTP " + r.status);
const json = await r.json();
return json.record ?? json;    
}

function groupByFaculty(items) {
const groups = {};
for (const d of items) (groups[d.faculty] ??= []).push(d);
return groups;
}

function render(groups) {
const out = document.getElementById("output");
out.innerHTML = Object.entries(groups).map(([faculty, list]) => `
    <section class="faculty">
    <h2>${faculty}</h2>
    <ul>${list.map(d => d.toHTML()).join("")}</ul>
    </section>`).join("");
}

loadData()
.then(data => render(groupByFaculty(data.departments.map(d => new Department(d)))))
.catch(e => document.getElementById("output").innerHTML =
    `<p class="error">Помилка завантаження: ${e.message}</p>`);