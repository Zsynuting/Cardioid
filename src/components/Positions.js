function X(t) {
  return 16 * Math.pow(Math.sin(t), 3);
}

function Y(t) {
  return 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 3 * Math.cos(3 * t) - 1 * Math.cos(4 * t);
}

let pos = [];
let start = Math.PI;
let steps = 360;
let step = Math.PI * 2 / steps;
let radian = start;
for (let i = 0; i < steps; i++) {
  radian += step;
  pos.push({
    x: X(radian),
    y: -Y(radian)
  })
}

export default pos;
