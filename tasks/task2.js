function getTriangleValue(a, b, c) {
  const first = Number(a);
  const second = Number(b);
  const third = Number(c);

  if (!Number.isFinite(first) || !Number.isFinite(second) || !Number.isFinite(third)) {
    return -1;
  }

  if (first + second <= third || first + third <= second || second + third <= first) {
    return -1;
  }

  const p = (first + second + third) / 2;
  return Math.sqrt(p * (p - first) * (p - second) * (p - third));
}
