let width = 30;
let height = 30;

let table = document.createElement('table');
table.className = "ground";

for (let i = 0; i < height; i++){
	let row = document.createElement('tr');
	row.className = "ground_row";
	for (let j = 0; j < width; j++){
		let cell = document.createElement('td');
		cell.className = "ground_cell";
		row.appendChild(cell);
	}
	table.appendChild(row);
}
document.body.appendChild(table);