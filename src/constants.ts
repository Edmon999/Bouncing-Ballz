import { IPlanet } from "./interfaces";

export const FRICTION = 0.9;

export const planets: IPlanet[] = [
  {
    name: "Earth",
    gravity: 0.98,
    background:
      "https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_1280.jpg",
    audio: "earthAudio",
  },
  {
    name: "Mars",
    gravity: 0.38,
    background:
      "https://t4.ftcdn.net/jpg/02/91/21/75/360_F_291217551_0LxKFM56ZDK2SmcHVWcEPa278qqoWmcM.jpg",
    audio: "marsAudio",
  },
  {
    name: "Moon",
    gravity: 0.16,
    background:
      "https://images.pexels.com/photos/975012/pexels-photo-975012.jpeg?cs=srgb&dl=pexels-peter-de-vink-288978-975012.jpg&fm=jpg",
    audio: "moonAudio",
  },
  {
    name: "Jupiter",
    gravity: 2.4,
    background:
      "https://cdn.esahubble.org/archives/images/screen/heic2017a.jpg",
    audio: "jupiterAudio",
  },
  {
    name: "Saturn",
    gravity: 1,
    background:
      "https://science.nasa.gov/wp-content/uploads/2023/12/hubble-saturn-oct2023-stsci-01hgxc6bfxwq6kfgxbptrn6mcq.png?w=1755",
    audio: "saturnAudio",
  },
];

export const audioElements: { [key: string]: HTMLAudioElement } = {
  earthAudio: document.getElementById("earthAudio") as HTMLAudioElement,
  marsAudio: document.getElementById("marsAudio") as HTMLAudioElement,
  moonAudio: document.getElementById("moonAudio") as HTMLAudioElement,
  jupiterAudio: document.getElementById("jupiterAudio") as HTMLAudioElement,
  saturnAudio: document.getElementById("saturnAudio") as HTMLAudioElement,
};
