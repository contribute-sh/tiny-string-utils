import { describe, expect, test } from "vitest";
import { titleCase } from "./titleCase.js";

describe("titleCase", () => {
  test("capitalizes two words", () => {
    expect(titleCase("hello world")).toBe("Hello World");
  });

  test("capitalizes a single word", () => {
    expect(titleCase("hello")).toBe("Hello");
  });

  test("empty string stays empty", () => {
    expect(titleCase("")).toBe("");
  });

  test("collapses multiple spaces", () => {
    expect(titleCase("hello   world")).toBe("Hello World");
  });

  test("normalizes mixed case input", () => {
    expect(titleCase("hELLo WoRLD")).toBe("Hello World");
  });

  test("preserves punctuation attached to words", () => {
    expect(titleCase("it's a test")).toBe("It's A Test");
  });

  test("uppercases the first alphabetic character in a word", () => {
    expect(titleCase(`"hello" world`)).toBe(`"Hello" World`);
  });
});
