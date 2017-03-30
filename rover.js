var myRover = {
  position: [0,0],
  direction: 'N',
  nextPosition: [0,0]
};

var secondRover = {
  position: [9,9],
  direction: 'S',
  nextPosition: [9,9]
}

var obstacles = {
  position1: [5,5],
  position2: [2,2],
  position3: [3,8],
  position4: [8,3]
};

var stop;           //Variable auxiliar para el caso de encontrar obstáculo

//Creación de la malla de 10x10
var dimension = 10;
var myGrid = new Array(dimension);
for (var i=0; i<dimension; i++) {
  myGrid[i] = new Array(dimension);
  for (var j=0; j<dimension; j++) {
    myGrid[i][j] = "[" + i + "," + j + "]";
  }
}

//Funciones de movimiento del Rover
function goForward(rover) {
  switch(rover.direction) {
    case "N":
      if(rover.position[0]===9) {
        rover.nextPosition[0] = 0;
      }
      else {rover.nextPosition[0]++;}
      break;
    case "E":
      if(rover.position[1]===9) {
        rover.nextPosition[1] = 0;
      }
      else {rover.nextPosition[1]++;}
      break;
    case "S":
      if(rover.position[0]===0) {
        rover.nextPosition[0] = 9;
      }
      else {rover.nextPosition[0]--;}
      break;
    case "W":
      if(rover.position[1]===0) {
        rover.nextPosition[1] = 9;
      }
      else {rover.nextPosition[1]--;}
      break;
  }
}

function goBackward(rover) {
  switch(rover.direction) {
    case "N":
      if(rover.position[0]===0) {
        rover.nextPosition[0] = 9;
      }
      else {rover.nextPosition[0]--;}
      break;
    case "E":
      if(rover.position[1]===0) {
        rover.nextPosition[1] = 9;
      }
      else {rover.nextPosition[1]--;}
      break;
    case "S":
      if(rover.position[0]===9) {
        rover.nextPosition[0] = 0;
      }
      else {rover.nextPosition[0]++;}
      break;
    case "W":
      if (rover.position[1]===9) {
        rover.nextPosition[1] = 0;
      }
      else {rover.nextPosition[1]++;}
      break;
  }
}

function turnRight(rover) {
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function turnLeft(rover) {
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
}

//Petición al usuario de los comandos a ejecutar por el rover
alert("Hello there! \n\nThe Rovers in Mars are waiting for your instructions. \nSend them as many commands as you want. \nThe possible commands are: \n\n   - f for go forward \n   - b for go back \n   - r to turn right \n   - l to turn left");
var instructions = prompt("Commands to the Mars Rovers:");

//Movimiento del rover por la malla
function actionsRover(rover, otherRover) {
  for (var k=0; k<instructions.length; k++) {
    switch (instructions[k]) {
      case "f":
      case "F":
        goForward(rover);
        break;
      case "b":
      case "B":
        goBackward(rover);
        break;
      case "r":
      case "R":
        turnRight(rover);
        break;
      case "l":
      case "L":
        turnLeft(rover);
        break;
      default:
        console.log("There is a no valid command... Let's continue.");
        continue;
    }
    if (rover.nextPosition[0]===obstacles.position1[0] && rover.nextPosition[1]===obstacles.position1[1]) {stop = 1;}
    else if (rover.nextPosition[0]===obstacles.position2[0] && rover.nextPosition[1]===obstacles.position2[1]) {stop = 1;}
    else if (rover.nextPosition[0]===obstacles.position3[0] && rover.nextPosition[1]===obstacles.position3[1]) {stop = 1;}
    else if (rover.nextPosition[0]===obstacles.position4[0] && rover.nextPosition[1]===obstacles.position4[1]) {stop = 1;}
    else if (rover.nextPosition[0]===otherRover.position[0] && rover.nextPosition[1]===otherRover.position[1]) {stop = 2;}

    if (stop===1) {
      console.log("Report: Obstacle in position [" + rover.nextPosition[0] + "," + rover.nextPosition[1] + "]");
      stop = 0;
      return;
    }
    else if (stop===2) {
      console.log("Report: The other Rover is in position [" + rover.nextPosition[0] + "," + rover.nextPosition[1] + "]");
      stop = 0;
      return;
    }
    else {
      rover.position[0] = rover.nextPosition[0];
      rover.position[1] = rover.nextPosition[1];
    }
    console.log("Rover position: [" + rover.position[0] + "," + rover.position[1] + "]. Rover direction: " + rover.direction);
  }
}

console.log("First Rover moving...");
actionsRover(myRover, secondRover);

console.log("Second Rover moving...");
actionsRover(secondRover, myRover);

//Mensaje final
console.log("Final First Rover Position: [" + myRover.position[0] + "," + myRover.position[1] + "]. First Rover direction: " + myRover.direction);
console.log("Final Second Rover Position: [" + secondRover.position[0] + "," + secondRover.position[1] + "]. Second Rover direction: " + secondRover.direction);
console.log("Mission accomplished!");
