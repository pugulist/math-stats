You are working on the `math-stats` npm library — a small Node.js statistics library.

## Project structure

- `math_modules/` — each statistical function lives in its own file
- `test/` — test files (the project uses mocha + chai or similar — check package.json for the test runner)
- `index.js` — re-exports all modules
- `package.json` — check the `test` script to know how to run tests

## Instructions

1. Read `PRD.md` and identify the next unchecked `[ ]` task (top to bottom).
2. Before writing code, read existing files to understand the patterns:
   - Look at an existing module in `math_modules/` to match the style.
   - Look at an existing test file in `test/` to match the test patterns.
   - Look at `index.js` to see how modules are exported.
3. Implement the task. Follow the existing code style exactly.
4. Run `npm test` to verify all tests pass (existing and new). Fix any failures.
5. Stage and commit with a descriptive message like: `feat: add range function`
6. Update the checkbox in `PRD.md` from `[ ]` to `[x]` and commit: `docs: mark range task complete`
7. ONLY COMPLETE ONE TASK PER RUN.

## Completion signals

- If ALL tasks in PRD.md are `[x]`, output exactly: RALPH_COMPLETE
- If you are blocked, output exactly: RALPH_BLOCKED and explain why.

## Important

- Do NOT modify existing functions or existing tests.
- Do NOT change the test framework or project structure.
- Reuse existing functions where the PRD says to (e.g., zScore should call mean() and standardDeviation() internally).
- Handle edge cases: empty arrays should throw or return NaN consistently with how existing functions handle them.
