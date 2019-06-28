export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const map = (
  value: number,
  min1: number,
  max1: number,
  min2: number,
  max2: number
) => min2 + ((value - min1) * (max2 - min2)) / (max1 - min1);

export const clampMap = (
  value: number,
  min1: number,
  max1: number,
  min2: number,
  max2: number
) => map(clamp(value, min1, max1), min1, max1, min2, max2);
