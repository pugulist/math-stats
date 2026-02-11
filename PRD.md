# PRD: Expand math-stats with additional statistical functions

This project already provides: mean, median, mode, standardDeviation, variance, harmonicMean, geometricMean.

We are adding new statistical functions that follow the existing patterns in `math_modules/`. Each function should:
- Live in its own file under `math_modules/`
- Be exported from `index.js`
- Have tests in `test/`
- Follow the existing code style (CommonJS, no TypeScript)
- Handle edge cases (empty arrays, single element, non-numeric input)

## Tasks

- [x] Add `range(arr)` — returns the difference between the max and min values. Add to `math_modules/range.js`, export from `index.js`, add tests in `test/range.test.js`.
- [ ] Add `percentile(arr, p)` — returns the value at the given percentile (0-100) using linear interpolation. Add to `math_modules/percentile.js`, export from `index.js`, add tests in `test/percentile.test.js`. Test with p=0, p=50 (should match median), p=100, and a mid-range value.
- [ ] Add `interquartileRange(arr)` — returns Q3 - Q1 (the 75th percentile minus the 25th percentile). Should reuse the percentile function internally. Add to `math_modules/interquartileRange.js`, export from `index.js`, add tests.
- [ ] Add `zScore(arr, value)` — returns how many standard deviations a value is from the mean: `(value - mean) / standardDeviation`. Should reuse existing mean and standardDeviation functions. Add to `math_modules/zScore.js`, export from `index.js`, add tests.
- [ ] Add `skewness(arr)` — returns the sample skewness (Fisher's definition). Positive = right tail, negative = left tail, 0 = symmetric. Add to `math_modules/skewness.js`, export from `index.js`, add tests with known symmetric and skewed datasets.
- [ ] Add `kurtosis(arr)` — returns the excess kurtosis. Normal distribution = 0. Add to `math_modules/kurtosis.js`, export from `index.js`, add tests.
- [ ] Update `README.md` — add documentation for all six new functions with usage examples, following the existing format.
