let timer;
let directx = direct = 0;
//Размеры поля 
let fieldSizeX = 20;
let fieldSizeY = 20;

//Массив направлений
let direction = [
    [0,1], //вправо
    [1,0], //вниз
    [0,-1], //влево
    [-1,0]]; //вверх

//Начальные параметры змеи
let snake = {
    length : 3,
    body : [[1,1],[1,2],[1,3]],
    initialisationSnake : function (){
        for ( let i = 0; i < this.length; i++){
            let currentBodyPart = this.body[i];
            document.getElementById(currentBodyPart.join()).className = 'cell snake';
        }
    },
    move : function (){
        direct = directx;
        let body = this.body
        let head = this.body[this.length-1];
        let headCell = head.map(function(value, index){ 
            return value + direction[direct][index] 
        });
        compareEatOrGameOver(headCell, body);
        return headCell;
    }
};

window.addEventListener('keydown', keyHandler, false);
prepareGamePane(fieldSizeX, fieldSizeY);
 
//Разметка поля
function prepareGamePane (fieldSizeX, fieldSizeY){
    for ( let x = 0; x < fieldSizeX; x++){
        let coordinateX = document.createElement('div');
        document.body.appendChild(coordinateX);
        coordinateX.className = 'field';
        for (let y = 0; y < fieldSizeY; y++){
            let coordinateY = document.createElement('div');
            coordinateX.appendChild(coordinateY);
            coordinateY.className = 'cell';
            coordinateY.id = x+','+y;
        }
    }
    snake.initialisationSnake();
    makeFood(fieldSizeX, fieldSizeY);
}
 
//Рандомная еда
function makeFood (fieldSizeX, fieldSizeY){
    let x = Math.round(Math.random() * (fieldSizeX-1));
    let y = Math.round(Math.random() * (fieldSizeY-1));
    let food = document.getElementById(x+','+y);
    if (food.className == 'cell'){
        food.className = "cell food";
    } else {
        makeFood(fieldSizeX, fieldSizeY);
    }
    return food;
}
 
function keyHandler (e){
    switch (e.code) {
        case 'KeyA':
            if (direct != 0){
                directx = 2;
            }
            break;
        case 'KeyD':
            if (direct != 2){
                directx = 0;
            }
            break;
        case 'KeyW':
            if (direct != 1){
                directx = 3;
            }
            break;
        case 'KeyS':
            if (direct != 3){
                directx = 1;
            }
            break;
        default :
            return;
    }
}
 
//Проверки 
function compareEatOrGameOver (headCell, body) {
    let tmp = document.getElementById(headCell.join());
    if (tmp == null ) {
        if (headCell[0] == -1)
            headCell[0] = fieldSizeX - 1;
        if (headCell[0] == fieldSizeX)
            headCell[0] = 0;
        if (headCell[1] == -1)
            headCell[1] = fieldSizeY - 1;
        if (headCell[1] == fieldSizeY)
            headCell[1] = 0;
        tmp = document.getElementById(headCell.join());
    }

    if ( tmp != null && tmp.className == 'cell' ){
        let removeTail = body.shift();
        body.push(headCell);
        document.getElementById(removeTail.join()).className = 'cell';
        document.getElementById(headCell.join()).className = 'cell snake';
    } else {
        if ( tmp != null && tmp.className == 'cell food'){
            snake.length++;
            body.push(headCell);
            document.getElementById(headCell.join()).className = 'cell snake';
            makeFood(fieldSizeX, fieldSizeY);
            let score = snake.length-3;
            document.getElementById('score').innerHTML = 'Счет: '+score;
        } else {
            if (tmp.className == 'cell snake'){
                clearInterval(timer);
                alert('Счет: ' + (snake.length-3) + '. Нажмите «Заново» чтобы попробовать еще раз');
            }
        }
    }
}

function start () {
    timer = setInterval(function(){
        snake.move();
    },400);
}

function reload () {
    window.location.reload();
}