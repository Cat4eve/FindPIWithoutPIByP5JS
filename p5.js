points = [];
radius = 500;
itterations = 1000000;
counter = 0;

for (let i = 0; i < itterations; i++) {
  points.push(
    [
      getRandomNumber(),
      getRandomNumber(),
    ]
  )
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  fill('black');
  for (let i = 0; i < itterations; i++) {
    if (
      Math.floor(Math.sqrt(
        Math.pow(radius - points[i][0], 2) + Math.pow(radius - points[i][1], 2) 
      ))  == radius
    ) { 
      circle(
        points[i][0],
        points[i][1],
        1
      );
      counter++;
    }
  }
  
  console.log(counter/1000);
  counter = 0;
  
}

function getRandomNumber() {
  return Math.floor(Math.random() * 1001);
}