import * as tf from "@tensorflow/tfjs"

export function shot(xs, angle = 1) {
  return tf.tidy(() => {
    const a = tf.variable(tf.scalar(-1));
    const b = tf.variable(tf.scalar(60 * angle));
    const c = tf.variable(tf.scalar(0));

    const xVector = tf.tensor1d(xs);
    const yVector = xVector
      .add(xVector.square().mul(a))
      .add(xVector.mul(b))
      .add(c)
    return Array.from(yVector.dataSync())
  });
}

export function generateMoves(amount = 50) {
  return Array.from(Array(amount)).map((_, index) => {
    return index
  })
}

export function generateAngle() {
  return Math.floor(Math.random() * 5) / 5
}
