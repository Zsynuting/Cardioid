import Positions from "./Positions.js";

export default function (offsetX, offsetY) {
  let timer = 100;
  let positions = [];
  let stepX = Math.random() > 0.5 ? 1 : -1;

  Positions.forEach(p => {
    positions.push({
      x: p.x + offsetX,
      y: p.y + offsetY
    })
  })

  this.move = () => {
    positions.forEach(p => {
      p.x += stepX;
      p.y -= 1;
    })
  }

  this.dead = () => {
    return timer-- === 0
  }

  this.paint = (context) => {
    context.beginPath();
    context.moveTo(positions[0].x, positions[0].y);
    positions.forEach(p => {
      context.lineTo(p.x, p.y);
    });
    context.closePath();
    context.fillStyle = "rgba(255,0,0, " + timer / 100 + ")";
    context.fill();
  }

}
