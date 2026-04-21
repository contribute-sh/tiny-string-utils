import { describe, expect, test } from "vitest";
import { kebabCase } from "./kebabCase.js";

describe("kebabCase", () => {
  test("joins a basic two-word phrase with dashes", () => {
    expect(kebabCase("Hello World")).toBe("hello-world");
  });

  test("converts camelCase input", () => {
    expect(kebabCase("helloWorld")).toBe("hello-world");
  });

  test("converts snake_case input", () => {
    expect(kebabCase("hello_world")).toBe("hello-world");
  });

  test("lowercases a single word", () => {
    expect(kebabCase("Hello")).toBe("hello");
  });

  test("keeps an empty string empty", () => {
    expect(kebabCase("")).toBe("");
  });

  test("collapses runs of separators and trims edges", () => {
    expect(kebabCase("  hello   __world--test  ")).toBe("hello-world-test");
  });
});
