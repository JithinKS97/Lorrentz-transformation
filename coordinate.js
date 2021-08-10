class Coordinate {
  constructor({ pos, length, height, noOfTicks, min, max }) {
    this.pos = createVector(pos.x, pos.y)
    this.length = length
    this.height = height
    this.min = min
    this.max = max
    this.noOfTicks = noOfTicks
    this.interval = this.length/this.noOfTicks
  }
  
  display() {
    push()
    fill('#89ABE3FF')
    stroke('#89ABE3FF')
    strokeWeight(1)
    this.drawAxes()
    this.drawArrows()
    this.markCoords()
    pop()
  }
  
  drawAxes() {
    push()
    translate(this.pos.x,this.pos.y)
    line(0, 0, this.length+this.interval, 0)
    line(0, 0, 0, -this.height)
    line(0, 0, -this.length/20, 0)
    line(0, 0, 0, this.length/20)
    pop()
  }
  
  drawArrows() {
    push()
    translate(this.length+this.interval, 0)
    triangle(
      this.pos.x+10,
      this.pos.y,
      this.pos.x,
      this.pos.y+5,
      this.pos.x,
      this.pos.y-5
    )
    pop()
    push()
    translate(0, -this.height)
    triangle(
      this.pos.x,
      this.pos.y-10,
      this.pos.x+5,
      this.pos.y,
      this.pos.x-5,
      this.pos.y
    )
    pop()
  }
  
  markCoords(){
    push()
    translate(this.pos.x, this.pos.y)
    let tick = (this.max-this.min)/this.noOfTicks
    for(let i=1;i<this.noOfTicks+1;i++) {
      line(
        i*this.interval,
        0,
        i*this.interval,
        10
      )
      line(
        i*this.interval-this.interval/2,
        0,
        i*this.interval-this.interval/2,
        5
      )
      textAlign(CENTER)
      text(round(tick*i,2), i*this.interval, + 25)
    }
    text(0, -10 , 25)
    pop()
  }
}