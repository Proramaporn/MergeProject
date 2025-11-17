import { merge } from "../src/merge";

describe("merge()", () => {
  test("merge three arrays (two ascending, one descending)", () => {
    const c1 = [1, 4, 7, 9];
    const c2 = [20, 10, 5, 3];
    const c3 = [8, 12, 30];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([1, 3, 4, 5, 7, 8, 9, 10, 12, 20, 30]);
  });

  test("handles empty arrays", () => {
    expect(merge([], [5, 4, 3], [])).toEqual([3, 4, 5]);
  });

  test("all arrays already sorted forms", () => {
    expect(merge([1], [3, 2], [5, 6])).toEqual([1, 2, 3, 5, 6]);
  });

  test("all arrays empty", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test("one empty array", () => {
    expect(merge([1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
  });

   test("arrays with negative numbers", () => {
    expect(merge([-5, 0, 2], [3, 1, -1], [-3, 4])).toEqual([-5, -3, -1, 0, 1, 2, 3, 4]);
  });

  test("arrays with duplicates", () => {
    expect(merge([1, 2, 2], [3, 2, 1], [2, 3])).toEqual([1, 1, 2, 2, 2, 2, 3, 3]);
  });

  test("arrays with single elements", () => {
    expect(merge([5], [10], [1])).toEqual([1, 5, 10]);
  });

  test("arrays with large numbers", () => {
    const a = [1000, 5000];
    const b = [10000, 7000, 2000];
    const c = [6000, 9000];
    expect(merge(a, b, c)).toEqual([1000, 2000, 5000, 6000, 7000, 9000, 10000]);
  });
});
