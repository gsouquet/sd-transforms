import { parseToRgba } from 'color2k';

/**
 * Helper: Transforms hex rgba colors used in figma tokens:
 * rgba(#ffffff, 0.5) =? rgba(255, 255, 255, 0.5).
 * This is kind of like an alpha() function.
 *
 * @param {string} value
 * @returns {string}
 */
export function transformHEXRGBa(value) {
  const match = /rgba\((?<hex>.+),\s*?(?<alpha>.+)\)/g.exec(value);
  if (match && match.groups) {
    const { hex, alpha } = match.groups;
    const [r, g, b] = parseToRgba(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return value;
}
