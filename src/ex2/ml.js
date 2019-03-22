import * as tf from "@tensorflow/tfjs";
import { getLabeledImages, imgToData, getDominantColor, colors } from "./utils";

window.model = createModel(3);

function createModel(inputLength) {
  const model = tf.sequential();
  // TODO: Add layers to the the model and compile it
  // Hint: Look at categoricalCrossentropy loss function

  return model;
}

async function train(model, xs, ys, epochs) {
  const { tx, ty } = tf.tidy(() => {
    const tx = tf.tensor2d(xs);
    const ty = tf.tensor2d(ys);
    return { tx, ty };
  });
  await model.fit(tx, ty, { epochs });
  return model;
}

async function predict(model, xs) {
  const output = model.predict(tf.tensor2d(xs, [1, xs.length]));
  // TODO: Convert the output to the prediction color
  return colors[0];
}

export async function predictColor(img) {
  const imgData = imgToData(img);
  const [r, g, b] = getDominantColor(imgData);

  const prediction = await predict(window.model, [r, g, b]);
  return prediction;
}

(async function() {
  console.log("Loading labeled data");
  const { xs, ys } = await getLabeledImages();
  console.log("got labeled data");
  console.log("start training");
  window.model = await train(window.model, xs, ys, 500);
  console.log("done training");
})();
