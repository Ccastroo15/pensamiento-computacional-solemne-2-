
let mode = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(mouseX / 3); // fondo 
  noStroke(); //para borrar las lineas de los bordes de las figuras 

let size = mouseX / 20 + mouseY / 20; //que los tamaños cambien por la posicion del mouse 

  let space = 60; // espacio entre figuras

if(mouseX < width / 2 && mouseY < height / 2){ //cuando el mouse esta arriba a la izquierda
  fill(255); //circulos blancos 
}
if(mouseX > width / 2 && mouseY < height / 2){ //cuando el mouse esta arriba a la derecha 

  fill(255,0,0); //circulos rojos
}
if(mouseX < width / 2 && mouseY > height / 2){ //cuando el mouse esta abajo a la izquierda 

  fill(0,0,255); //circulos azules 
}
if(mouseX > width / 2 && mouseY > height / 2){ //cuando el mouse esta abajo a la derecha 

  fill(255,255,0); // circulos amarillos 
}
  
  for(let y = 0; y < height; y = y + space){ //repetir las filas de circulos 
    for(let x = 0; x < width; x = x + space){ //repetir columnas de circulos

      if(mode == 0){ //si es mode 0
        ellipse(x, y, size); //dbuja los circulos

      } else {

        rect(x, y, size, size); //cambia a cuadrados con el click 
 }
 }
 }
}
function mousePressed(){ //para activar el click y que cambie el circulo a cuadrado
  if(mode == 0){
    mode = 1;
  } else {
    mode = 0; //que cambien al hacer click 
  }
} 