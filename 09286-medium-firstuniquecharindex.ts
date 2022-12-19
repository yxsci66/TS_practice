// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
  Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
  Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
  Expect<Equal<FirstUniqueCharIndex<"">, -1>>
];

// ============= Your Code Here =============
// your answers

// transform string to tuple
type StrToTuple<
  S extends string,
  Ret extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? StrToTuple<Rest, [...Ret, First]>
  : Ret;

// search element in arr
type ElmInArr<
  Elm extends string,
  T extends string[],
  Ret extends any[] = []
> = T extends [infer First, ...infer Rest extends string[]]
  ? Equal<Elm, First> extends true
    ? ElmInArr<Elm, Rest, [...Ret, unknown]>
    : ElmInArr<Elm, Rest, Ret>
  : Ret["length"] extends 1
  ? -1
  : Ret["length"];

type FirstUniqueCharIndex<
  T extends string,
  A extends string[] = StrToTuple<T>,
  standard extends string[] = A,
  Ret extends any[] = []
> = A extends [infer First extends string, ...infer Rest extends string[]]
  ? ElmInArr<First, standard> extends -1
    ? Ret["length"]
    : FirstUniqueCharIndex<T, Rest, standard, [...Ret, unknown]>
  : -1;
