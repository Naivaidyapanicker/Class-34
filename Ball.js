class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);

  }

    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("brown");
      ellipse( 0, 0, this.width, this.height);
      pop();
    }
}
