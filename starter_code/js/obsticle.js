class Obstacle {
  constructor(ctx, posTop, posBottom, gameWidth, gameHeight) {
    this.ctx = ctx;

    this.posX = gameWidth;
    this.posY = gameHeight * 0.98 - this.height;

    this.imgTop = new Image();
    this.imgBottom = new Image();
    this.imgTop.src = "../images/obstacle_top.png";
    this.imgBottom.src = "../images/obstacle_bottom.png";

    this.posTop = posTop;
    this.posBottom = posBottom;

    this.vx = 10;
  }

  draw() {
    this.ctx.drawImage(this.imgTop, this.posX, this.posTop);
    this.ctx.drawImage(this.imgBottom, this.posX, this.posBottom);
  }

  move() {
    this.posX -= this.vx;
  }
}
