class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    this.dummy.position.x = mouseX;
    this.dummy.position.y = mouseY;
    super.display();
  }
}
