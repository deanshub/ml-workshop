import * as tf from "@tensorflow/tfjs";

const a = tf.variable(tf.scalar(Math.random() * 1000));
const b = tf.variable(tf.scalar(Math.random() * 1000));
const c = tf.variable(tf.scalar(Math.random() * 1000));
const d = tf.variable(tf.scalar(Math.random() * 1000));

const learningRate = 100;
const optimizer = tf.train.adam(learningRate);

function toYs(points) {
  return tf.tensor1d(points.map(p => p.y));
}
function toXs(points) {
  return tf.tensor1d(points.map((_, i) => i));
}

export async function generateModel(points) {
  const numIterations = 200;
  const xs = toXs(points);
  const ys = toYs(points);
  await train(xs, ys, numIterations);
  return Array.from(predict(toXs(points)).dataSync());
}

export function predict(x) {
  // TODO: implement the direct model
}

function loss(prediction, labels) {
  const error = prediction
    .sub(labels)
    .square()
    .mean();

  return error;
}

async function train(xs, ys, numIterations) {
  // TODO: implement using optimizer, predict and loss
}
