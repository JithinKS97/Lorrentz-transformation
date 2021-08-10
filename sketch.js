let movingCoord, restCoord

function setup() {
  createCanvas(640, 400);
  const movingCoordConfig = getMovingCoordConfig()
  const restCoordConfig = getRestCoordConfig()
  restCoord = new Coordinate(restCoordConfig)
  movingCoord = new Coordinate(movingCoordConfig)
}

function draw() {
  background('black');
  restCoord.display()
  movingCoord.display()
}

