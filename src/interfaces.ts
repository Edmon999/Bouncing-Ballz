export interface IPlanet {
  name: string;
  gravity: number;
  background: string;
  audio: string;
}

export interface IBall {
  x: number;
  y: number;
  radius: number;
  dy: number;
  color: string;
  update(
    gravity: number,
    friction: number,
    deltaTime: number,
    canvasHeight: number
  ): void;
  draw(ctx: CanvasRenderingContext2D): void;
  isStopped(canvasHeight: number): boolean;
}
