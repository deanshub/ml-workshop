import reds from "./reds";
import greens from "./greens";
import blues from "./blues";

export const colors = ["red", "green", "blue"];

export function imgToData(img) {
  const ctx = document.createElement("CANVAS").getContext("2d");
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, img.width, img.height).data;
  return Array.from(imgData);
}

const images = reds.concat(greens).concat(blues);
const labels = Array(reds.length)
  .fill(colors[0])
  .concat(Array(greens.length).fill(colors[1]))
  .concat(Array(blues.length).fill(colors[2]));

function toImgElem(base64) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.width = 800;
    img.height = 500;
    img.src = base64;
    img.onload = () => img.remove() || resolve(img);
    img.onError = e => img.remove() || reject(e);
  });
}

export async function getLabeledImages() {
  const xs = [];
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    xs.push(getDominantColor(imgToData(await toImgElem(img))));
  }
  // const xs = images.map(img => getDominantColor(imgToData(toImgElem(img))));
  const ys = labels.map(c => {
    // return colors.findIndex(l => c === l);
    return colors.map(l => (c === l ? 1 : 0));
  });
  return { xs, ys };
  // imgToData()
}

export function getDominantColor(imgData) {
  let r = 0,
    g = 0,
    b = 0;
  let count = 0;
  const blockSize = 5;
  for (var i = 0; i < imgData.length; i += 4 * blockSize) {
    if (imgData[i] !== 0) {
      count++;
      r += imgData[i];
      g += imgData[i + 1];
      b += imgData[i + 2];
    }
  }
  return [~~(r / count), ~~(g / count), ~~(b / count)];
}
