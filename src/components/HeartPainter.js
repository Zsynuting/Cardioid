import Heart from './Heart'

export default function () {
  let canvas = null;
  let hearts = [];

  const paint = () => {
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach(h => {
      if (h && h.dead()) {
        h = null;
        return;
      };
      h.move();
      h.paint(context);
    })
    
    let i = 0;
    while (i < hearts.length) {
      if (hearts[i]) {
        i++;
      } else {
        hearts.splice(i, 1)
      }
    }
    window.requestAnimationFrame(paint)
  };

  this.listen = (c) => {
    canvas = c;
    paint();
  };

  this.at = (offsetX, offsetY) => {
    hearts.push(new Heart(offsetX, offsetY));
  };
}
