// Type declarations for math-stats.
//
// Each function returns null when its argument is not an array; the first
// overload types the valid call, so typed callers need no null check.

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
