var myRover = {
  position: [0,0],
  direction: 'N'
};

var obstacles = {
  position1: [5,5],
  position2: [2,2],
  position3: [3,8],
  position4: [8,3]
};

var nextPosition = [];   //Variable auxiliar para la detección de obstáculos
nextPosition[0] = myRover.position[0];
nextPosition[1] = myRover.position[1];
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
      if(rover.position[0]===10) {
        nextPosition[0] = 0;
      }
      nextPosition[0]++;
      break;
    case "E":
      if(rover.position[1]===10) {
        nextPosition[1] = 0;
      }
      nextPosition[1]++;
      break;
    case "S":
      if(rover.position[0]===0) {
        nextPosition[0] = 10;
      }
      nextPosition[0]--;
      break;
    case "W":
      if(rover.position[1]===0) {
        nextPosition[1] = 10;
      }
      nextPosition[1]--;
      break;
  }
}

function goBackward(rover) {
  switch(rover.direction) {
    case "N":
      if(rover.position[0]===0) {
        nextPosition[0] = 10;
      }
      nextPosition[0]--;
      break;
    case "E":
      if(rover.position[1]===0) {
        nextPosition[1] = 10;
      }
      nextPosition[1]--;
      break;
    case "S":
      if(rover.position[0]===10) {
        nextPosition[0] = 10;
      }
      nextPosition[0]++;
      break;
    case "W":
      if (rover.position[1]===10) {
        nextPosition[1] = 0;
      }
      nextPosition[1]++;
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
alert("Hello there! \n\nThe Rover in Mars is waiting for your instructions. \nSend him as many commands as you want. \nThe possible commands are: \n\n   - f for go forward \n   - b for go back \n   - r to turn right \n   - l to turn left");
var instructions = prompt("Commands to the Mars Rover:");

//Movimiento del rover por la malla
for (var k=0; k<instructions.length; k++) {
  switch (instructions[k]) {
    case "f":
    case "F":
      goForward(myRover);
      break;
    case "b":
    case "B":
      goBackward(myRover);
      break;
    case "r":
    case "R":
      turnRight(myRover);
      break;
    case "l":
    case "L":
      turnLeft(myRover);
      break;
    default:
      break;
  }
  if (nextPosition[0]===obstacles.position1[0] && nextPosition[1]===obstacles.position1[1]) {stop = 1;}
  else if (nextPosition[0]===obstacles.position2[0] && nextPosition[1]===obstacles.position2[1]) {stop = 1;}
  else if (nextPosition[0]===obstacles.position3[0] && nextPosition[1]===obstacles.position3[1]) {stop = 1;}
  else if (nextPosition[0]===obstacles.position4[0] && nextPosition[1]===obstacles.position4[1]) {stop = 1;}

  if (stop===1) {
    console.log("Report: Obstacle in position [" + nextPosition[0] + "," + nextPosition[1] + "]");
    break;
  }
  else {
    myRover.position[0] = nextPosition[0];
    myRover.position[1] = nextPosition[1];
  }
  console.log("Rover position: [" + myRover.position[0] + "," + myRover.position[1] + "]. Rover direction: " + myRover.direction);
}

//Mensaje final
console.log("Final Rover Position: [" + myRover.position[0] + "," + myRover.position[1] + "]. Rover direction: " + myRover.direction);
console.log("Mission accomplished!");
