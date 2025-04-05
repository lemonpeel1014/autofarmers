/**
 * Returns the intersection of two string arrays, ignoring case.
 */
export function intersectIgnoreCase(a: string[], b: string[]): string[] {
  const map = new Map<string, true>();

  for (const s of a) {
    map.set(s.toLowerCase(), true);
  }

  const result: string[] = [];
  for (const s of b) {
    if (map.has(s.toLowerCase())) {
      result.push(s);
    }
  }

  return result;
}
