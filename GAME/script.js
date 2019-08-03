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
		cell.id = i+","+j;
		row.appendChild(cell);
	}
	table.appendChild(row);
}
document.body.appendChild(table);

/*пробуем двигать голову*/
let cell_x = 14;
let cell_y = 15;
let snake_head = document.getElementById(cell_y+","+cell_x);
snake_head.className = "snake_head";

/*Ивенты на нажатия WASD*/
document.addEventListener('keydown', function(e) {
	if (e.code == 'KeyW') {
		let cell = document.getElementById(cell_y+","+cell_x);
		if (cell_y-1 >= 0){
			cell.className = "ground_cell";
			cell_y--;
			cell = document.getElementById(cell_y+","+cell_x);
			cell.className = "snake_head";
		}		
	}
});

document.addEventListener('keydown', function(e) {
	if (e.code == 'KeyA') {
		let cell = document.getElementById(cell_y+","+cell_x);
		if (cell_x-1 >= 0){
			cell.className = "ground_cell";
			cell_x--;
			cell = document.getElementById(cell_y+","+cell_x);
			cell.className = "snake_head";
		}
	}
});

document.addEventListener('keydown', function(e) {
	if (e.code == 'KeyS') {
		let cell = document.getElementById(cell_y+","+cell_x);	
		if (cell_y+1 < height){
			cell.className = "ground_cell";
			cell_y++;
			cell = document.getElementById(cell_y+","+cell_x);
			cell.className = "snake_head";
		}		
	}
});

document.addEventListener('keydown', function(e) {
	if (e.code == 'KeyD') {
		let cell = document.getElementById(cell_y+","+cell_x);
		console.log(cell_x);
		if (cell_x+1 < width){
			cell.className = "ground_cell";
			cell_x++;
			cell = document.getElementById(cell_y+","+cell_x);
			cell.className = "snake_head";
		}
	}
});