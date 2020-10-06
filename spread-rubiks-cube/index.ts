let cube_count: number = 0;

const showCubeCount = () => {
  const target = document.getElementById("showCubeCountTarget");
  cube_count++;
  target.innerHTML = "ルービックキューブの数：" + cube_count.toString();

};

const makeImage = () => {
  const img = document.createElement("img");
  img.src = "./icon/rubik.png";
  img.alt = "Do you love rubik's cube";
  return img;
};

const addCube = () => {
  const target = document.getElementById("addCubeTarget");
  target.appendChild(makeImage());
  showCubeCount();
};

const addCubes = (count: number) => {
  if (count <= 0) return;
  for (let i = 0; i < count; i++) {
    addCube();
  }
};

// const guruguruCubes = () => {
//   let array = [["*"]]
//   for (let i = 2; i < 20; i++) {
//     array = transpose(array).reverse();
//     array.forEach(e => e.unshift(" "));
//     array.push['*'] * i

//     array.forEach(l => console.log(l.join(' ')));
//   }
// };