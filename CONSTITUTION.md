# Project Constitution

Version: 1.0.0
Date: 2026-04-21

## Purpose

`tiny-string-utils` is a TypeScript library of small, pure string case-conversion helpers. MVP ships `slugify(input: string): string`. Harden phase adds three additional case converters — `camelCase`, `snakeCase`, `kebabCase` — each with its own file and test suite. All functions are pure, deterministic, and dependency-free.

## Principles

- **Every function lives in its own file.** `src/<name>.ts` + `src/<name>.test.ts`. This keeps modules independent and parallel-friendly for contributors.
- **Pure functions only.** No side effects, no I/O, no Date.now().
- **Zero runtime dependencies.**
- **Every public function has a test file with at least 6 cases.**

## Stack

- language: typescript
- package_manager: pnpm
- install: pnpm install --frozen-lockfile
- test: pnpm vitest run
- lint: pnpm eslint .
- typecheck: pnpm tsc --noEmit
- build: pnpm build

## Boundaries

- Will NOT add runtime dependencies.
- Will NOT combine multiple helpers into a single file.
- Will NOT modify or rewrite MVP files (`src/slugify.ts`, `src/slugify.test.ts`) during the harden phase — each new helper adds new files only.
- Will NOT export new symbols from `src/index.ts` without also adding its own file + test.

## Quality Standards

- `pnpm tsc --noEmit` passes with `strict: true` and `noUncheckedIndexedAccess: true`.
- `pnpm vitest run` passes with at least 6 cases per function.
- `pnpm eslint .` passes with zero warnings.
- `pnpm build` produces `dist/index.js` and a `.d.ts` file for each public function.

## Roadmap

### MVP

- `slugify(input: string): string` — lowercase + strip diacritics + join with dashes.

### Hardening

- `camelCase(input: string): string` — converts `"hello world"` → `"helloWorld"`. Lives in `src/camelCase.ts` + `src/camelCase.test.ts`. Re-export from `src/index.ts`. ≥6 tests.
- `snakeCase(input: string): string` — converts `"Hello World"` → `"hello_world"`. Lives in `src/snakeCase.ts` + `src/snakeCase.test.ts`. Re-export from `src/index.ts`. ≥6 tests.
- `kebabCase(input: string): string` — converts `"Hello World"` → `"hello-world"`. Lives in `src/kebabCase.ts` + `src/kebabCase.test.ts`. Re-export from `src/index.ts`. ≥6 tests.
- `titleCase(input: string): string` — converts `"hello world"` → `"Hello World"`. Lives in `src/titleCase.ts` + `src/titleCase.test.ts`. Re-export from `src/index.ts`. ≥6 tests.

### Polish

- JSDoc for every exported function.
- Usage examples in README.md.

## Verification

- type: library
