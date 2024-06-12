// Code your orbitCircumference function here:
let orbitCircumference = (radius) => {
  return Math.round(2 * Math.PI * radius);
};
console.log(orbitCircumference(3));
//Shorter way
// let orbitCircumference = (radius) => Math.round(2 * Math.PI * radius);

// Code your missionDuration function here:

let missionDuration = (numOrbits, orbitRad = 2000, speed = 28000) => {
  let time = (numOrbits * orbitCircumference(orbitRad)) / speed;
  return Math.round(time * 100) / 100;
};

// Copy/paste your selectRandomEntry function here:
let selectRandomEntry = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
console.log(missionDuration(5));
// Code your oxygenExpended function here:

// Candidate data & crew array.
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let crew = [candidateA, candidateC, candidateE];
