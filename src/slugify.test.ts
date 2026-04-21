import { describe, expect, test } from "vitest";
import { slugify } from "./slugify.js";

describe("slugify", () => {
  test("lowercases", () => {
    expect(slugify("HELLO")).toBe("hello");
  });

  test("joins with dashes", () => {
    expect(slugify("hello world")).toBe("hello-world");
  });

  test("strips diacritics", () => {
    expect(slugify("café")).toBe("cafe");
  });

  test("collapses runs of non-alpha", () => {
    expect(slugify("a  b__c")).toBe("a-b-c");
  });

  test("trims leading/trailing dashes", () => {
    expect(slugify("  hello  ")).toBe("hello");
  });

  test("empty string stays empty", () => {
    expect(slugify("")).toBe("");
  });
});
