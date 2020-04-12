setup = () => {
  (posx = 200), (posy = 200);
  createCanvas(400, 400);
  strokeWeight(0);
};
draw = function () {
  fill("yellow");
  rect(0, 0, 400, 400);
  posx += random(-2, 2);
  posy += random(-2, 2);
  fill("blue");
  rect(posx, posy, 4, 4);
};
