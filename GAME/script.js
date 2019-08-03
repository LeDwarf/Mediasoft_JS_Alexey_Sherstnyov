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
		cell.id = "c"+i+j;
		row.appendChild(cell);
	}
	table.appendChild(row);
}
document.body.appendChild(table);

/*пробуем двигать голову*/
let cell_id = "c1415"
let snake_head = document.getElementById(cell_id);
snake_head.className = "snake_head";

/*ивент на нажатие D*/
document.addEventListener('keydown', function(e) {
	if (e.code == 'KeyD' && (e.ctrlKey || e.metaKey)) {
		alert('считал нажатие');
		/*let cell = document.getElementById(cell_id);
		cell.className = "ground_cell";
		cell = document.getElementById(cell_id+1);
		cell.className = "snake_head";*/
	}
});