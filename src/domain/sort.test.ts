import { describe, expect, it } from "vitest";
import sort, { PackageStackType } from "./sort";

describe("sort", () => {
  it("Should reject packages that are both bulky and heavy", () => {
    expect(sort(150, 150, 150, 50)).toBe(PackageStackType.Rejected);
  });

  it("Should sort packages with one dimension >= 150 into `SPECIAL` stack", () => {
    expect(sort(160, 1, 1, 1)).toBe(PackageStackType.Special);
  });

  it("Should sort packages with dimensions >= 1,000,000 cm^3 into `SPECIAL` stack", () => {
    expect(sort(100, 100, 100, 1)).toBe(PackageStackType.Special);
  });

  it("Should sort heavy (but not bulky) packages into `SPECIAL` stack", () => {
    expect(sort(10, 10, 10, 20)).toBe(PackageStackType.Special);
  });

  it("Should sort packages that are not bulky nor heavy into `STANDARD` stack", () => {
    expect(sort(5, 5, 5, 5)).toBe(PackageStackType.Standard);
  });

  it("Should throw if any input is NaN or non-finite", () => {
    expect(() => sort(NaN, 5, 5, 5)).toThrow();
    expect(() => sort(5, 5, 5, Infinity)).toThrow();
  });

  it("Should throw an error if any dimension provided is not a positive number", () => {
    expect(() => sort(-5, 5, 5, 5)).toThrow();
  });
});
