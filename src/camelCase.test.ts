import { describe, expect, test } from "vitest";
import { camelCase } from "./camelCase.js";

describe("camelCase", () => {
  test("converts a basic two-word phrase", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
  });

  test("keeps a single lowercase word unchanged", () => {
    expect(camelCase("hello")).toBe("hello");
  });

  test("converts kebab-case input", () => {
    expect(camelCase("hello-world")).toBe("helloWorld");
  });

  test("converts snake_case input", () => {
    expect(camelCase("hello_world")).toBe("helloWorld");
  });

  test("normalizes mixed-case input", () => {
    expect(camelCase("hELLo woRLD")).toBe("helloWorld");
  });

  test("keeps an empty string empty", () => {
    expect(camelCase("")).toBe("");
  });

  test("collapses extra separator runs", () => {
    expect(camelCase("  hello__world   again--here  ")).toBe(
      "helloWorldAgainHere",
    );
  });
});
