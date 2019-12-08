class Player {
  constructor(ctx, width, height, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.image = new Image();
    this.image.src = "../images/bird.png";

    this.posX = 50;
    this.posY = gameHeight * 0.98 - this.height;
    this.posY0 = gameHeight * 0.98 - this.height;
    this.vy = 1;
    this.gravity = 0.4;
    this.gameWidth = gameWidth;

    this.frames = 3;
    this.framesIndex = 0;

    this.keys = keys;
    this.setListeners();
  }

  draw(framesCounter) {
    this.ctx.drawImage(this.image, this.framesIndex * Math.floor(this.image.width / this.frames), 0, Math.floor(this.image.width / this.frames), this.image.height, this.posX, this.posY, this.width, this.height);
    this.clearBullets();
    this.bullets.forEach(bullet => bullet.draw());
    this.animate(framesCounter);
  }

  move() {
    if (this.posY <= this.posY0) {
      this.posY += this.vy;
      this.vy += this.gravity;
    } else {
      this.vy = 1;
      this.posY = this.posY0;
    }
    this.bullets.forEach(bullet => bullet.move());
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 2) this.framesIndex = 0;
    }
  }

  setListeners() {
    this.ctx.addEventListener("click", () => {
      this.posY += 10;
    });
  }
}
