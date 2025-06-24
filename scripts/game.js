let positionLeft = 350;
let positionTop = 0;
let character = document.getElementById("character");

function moveLeft(){
    if(positionLeft>0){
        positionLeft = positionLeft-5;
        character.style.left=positionLeft +"px";
    }
    console.log(positionLeft);
}

// Move Left
function moveLeft() {
  if (positionLeft > 0) {
    positionLeft -= 5;
    character.style.left = positionLeft + "px";
  }
  console.log("Left:", positionLeft);
}

// Move Right
function moveRight() {
  if (positionLeft < 695){
    positionLeft += 5;
    character.style.left = positionLeft + "px";
  }
  console.log("Right:", positionLeft);
}

// Move Up
function moveUp() {
  if (positionTop >0){
    positionTop -= 5;
    character.style.top = positionTop + "px";
  }
  console.log("Up:", positionTop);
}

// Move Down
function moveDown() {
  if (positionTop <445){
    positionTop += 5;
    character.style.top = positionTop + "px";
  }
  console.log("Down:", positionTop);
}