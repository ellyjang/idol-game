class Block {
  constructor(x, y, c, text) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = 6;
    this.text = text;
  }
  
  move() {
    this.y += this.speed;
  }
  
  display() {
    noStroke();
    fill(this.c);
    rect(this.x, this.y, 167, 85);
    textAlign(CENTER);
    textSize(50);
    fill(0);
    text(this.text, this.x+85, this.y+52);
  }
}