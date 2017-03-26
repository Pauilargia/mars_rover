var myRover = {
  position: [0,0],
  direction: 'N'
};

var dimension = 10;
var myGrid = new Array(dimension);
for (var i=0; i<dimension; i++) {
  myGrid[i] = new Array(dimension);
  for (var j=0; j<dimension; j++) {
    myGrid[i][j] = "[" + i + "," + j + "]";
  }
}

function goForward(rover) {
  switch(rover.direction) {
    case "N":
      if(rover.position[0]===10) {
        rover.position[0] = 0;
      }
      rover.position[0]++;
      break;
    case "E":
      if(rover.position[1]===10) {
        rover.position[1]=0;
      }
      rover.position[1]++;
      break;
    case "S":
      if(rover.position[0]===0) {
        rover.position[0]=10;
      }
      rover.position[0]--;
      break;
    case "W":
      if(rover.position[1]===0) {
        rover.position[1]=10;
      }
      rover.position[1]--;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + "," + rover.position[1] + "]. Rover direction: " + rover.direction);
}

function goBackward(rover) {
  switch(rover.direction) {
    case "N":
      if(rover.position[0]===0) {
        rover.position[0]=10;
      }
      rover.position[0]--;
      break;
    case "E":
      if(rover.position[1]===0) {
        rover.position[1]=10;
      }
      rover.position[1]--;
      break;
    case "S":
      if(rover.position[0]===10) {
        rover.position[0]=0;
      }
      rover.position[0]++;
      break;
    case "W":
      if (rover.position[1]===10) {
        rover.position=0;
      }
      rover.position[1]++;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + "," + rover.position[1] + "]. Rover direction: " + rover.direction);
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
  console.log("Rover position: [" + rover.position[0] + "," + rover.position[1] + "]. Rover direction: " + rover.direction);
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
  console.log("Rover position: [" + rover.position[0] + "," + rover.position[1] + "]. Rover direction: " + rover.direction);
}

alert("Hello there! \n\nThe Rover in Mars is waiting for your instructions. \nSend him as many commands as you want. \nThe possible commands are: \n\n   - f for go forward \n   - b for go back \n   - r to turn right \n   - l to turn left");
var instructions = prompt("Commands to the Mars Rover:");

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
}
console.log("Final Rover Position: [" + myRover.position[0] + "," + myRover.position[1] + "]. Rover direction: " + myRover.direction);
console.log("Mission accomplished!");
