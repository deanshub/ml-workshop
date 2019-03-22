export function generatePoints() {
  // return [Math.random(), Math.random(), Math.random()];
  return Array.from(Array(3)).map(() => ({ y: Math.random() * 1000 }));
}
