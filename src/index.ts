import { Ball } from "./ball";
import { FRICTION, audioElements, planets } from "./constants";
import { IBall } from "./interfaces";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const MAX_CIRCLES = 50;
const RADIUS = 20;

let currentPlanetIndex = 0;
let clickCount = 0;
let gravity = planets[currentPlanetIndex].gravity;
let circles: IBall[] = [];
let lastTime = 0;
let animationFrameId: number | null = null;

initialize();

function initialize() {
  updateBackground();
  canvas.addEventListener("click", handleClick);
}

function updateBackground() {
  document.body.style.backgroundImage = `url(${planets[currentPlanetIndex].background})`;
  document.body.style.backgroundSize = "cover";
}

function playAudio() {
  audioElements[planets[currentPlanetIndex].audio].play();
}

function handleClick(event: MouseEvent) {
  if (circles.length >= MAX_CIRCLES) return;

  createBall(event.clientX, event.clientY);
  clickCount++;

  if (clickCount > 4) {
    switchPlanet();
  } else if (circles.length === 1) {
    audioElements[planets[currentPlanetIndex].audio].play();
  }

  if (animationFrameId === null) {
    lastTime = performance.now();
    animationFrameId = requestAnimationFrame(animate);
  }
}

function createBall(x: number, y: number) {
  const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  const circle = new Ball(x, y, RADIUS, color);
  circles.push(circle);
}

function switchPlanet() {
  pauseAudio();
  clickCount = 0;
  currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
  gravity = planets[currentPlanetIndex].gravity;
  updateBackground();
  playAudio();
}

function pauseAudio() {
  audioElements[planets[currentPlanetIndex].audio].pause();
  audioElements[planets[currentPlanetIndex].audio].currentTime = 0;
}

function animate(currentTime: number) {
  const deltaTime = currentTime - lastTime;
  lastTime = currentTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let allStopped = true;

  circles.forEach((circle) => {
    circle.update(gravity, FRICTION, deltaTime, canvas.height);
    circle.draw(ctx);
    if (!circle.isStopped(canvas.height)) {
      allStopped = false;
    }
  });

  if (!allStopped) {
    animationFrameId = requestAnimationFrame(animate);
  } else if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
    pauseAudio();
  }
}
