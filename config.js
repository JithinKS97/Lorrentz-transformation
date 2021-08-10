function getRestCoordConfig() {
  let movingCoordConfig = {
    pos: {
      x: 30,
      y: height*(3/4)
    },
    length: 500,
    height: height/8,
    noOfTicks:10,
    max:1,
    min:0
  }
  return movingCoordConfig
}

function getMovingCoordConfig() {
  let movingCoordConfig = {
    pos: {
      x: 30,
      y: height*(2/5)
    },
    length: 200,
    height: height/8,
    noOfTicks:5,
    max:1,
    min:0
  }
  return movingCoordConfig
}