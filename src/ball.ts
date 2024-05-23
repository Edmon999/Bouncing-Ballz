import { IBall } from "./interfaces";

export class Ball implements IBall {
  x: number;
  y: number;
  radius: number;
  dy: number;
  color: string;

  constructor(x: number, y: number, radius: number, color: string) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dy = 0;
    this.color = color;
  }

  update(
    gravity: number,
    friction: number,
    deltaTime: number,
    canvasHeight: number
  ): void {
    if (this.y + this.radius + (this.dy * deltaTime) / 16 > canvasHeight) {
      this.dy = -this.dy * friction;
    } else {
      this.dy += (gravity * deltaTime) / 16;
    }
    this.y += (this.dy * deltaTime) / 16;

    if (Math.abs(this.dy) < 0.1) {
      this.dy = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  isStopped(canvasHeight: number): boolean {
    return Math.abs(this.dy) < 0.1 && this.y + this.radius >= canvasHeight;
  }
}
