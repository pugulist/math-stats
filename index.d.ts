// Type declarations for math-stats.
//
// Each function returns null when its argument is not an array; the first
// overload types the valid call, so typed callers need no null check.

export function sum(numbers: number[]): number;
export function sum(numbers: unknown): number | null;

export function mean(numbers: number[]): number;
export function mean(numbers: unknown): number | null;

export function median(numbers: number[]): number;
export function median(numbers: unknown): number | null;

/** Every most frequent value, in order of first appearance. */
export function mode<T>(values: T[]): T[];
export function mode(values: unknown): unknown[] | null;

/** Population standard deviation. */
export function standardDeviation(numbers: number[]): number;
export function standardDeviation(numbers: unknown): number | null;

/** Population variance. */
export function variance(numbers: number[]): number;
export function variance(numbers: unknown): number | null;

export function harmonicMean(numbers: number[]): number;
export function harmonicMean(numbers: unknown): number | null;

export function geometricMean(numbers: number[]): number;
export function geometricMean(numbers: unknown): number | null;

/** Sample variance (Bessel's correction); NaN for fewer than two values. */
export function sampleVariance(numbers: number[]): number;
export function sampleVariance(numbers: unknown): number | null;

/** Sample standard deviation; NaN for fewer than two values. */
export function sampleStandardDeviation(numbers: number[]): number;
export function sampleStandardDeviation(numbers: unknown): number | null;

export function min(numbers: number[]): number;
export function min(numbers: unknown): number | null;

export function max(numbers: number[]): number;
export function max(numbers: unknown): number | null;

export function range(numbers: number[]): number;
export function range(numbers: unknown): number | null;

/** Linear interpolation between closest ranks; null for a p outside 0 to 100. */
export function percentile(numbers: unknown, p: unknown): number | null;

/** null when the arrays differ in length or a weight is negative; NaN when the weights sum to zero. */
export function weightedMean(values: unknown, weights: unknown): number | null;
