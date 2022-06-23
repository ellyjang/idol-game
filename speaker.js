class Speaker {
  constructor(text1, ty1, text2, ty2) {
    this.text1 = text1;
    this.ty1 = ty1;
    this.text2 = text2;
    this.ty2 = ty2;
  }
  
  display() {
    image(lines, 0, 0);
    noStroke();
    fill(255);
    textAlign(CENTER);
    textSize(35);
    text(this.text1, 196, this.ty1);
    textAlign(CENTER);
    textSize(40);
    text(this.text2, width/2, this.ty2);
  }
}