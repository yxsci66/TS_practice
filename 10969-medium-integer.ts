// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";
import { ExpectFalse, NotEqual } from "./test-utils";

let x = 1;
let y = 1 as const;

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
];

// ============= Your Code Here =============
// type isAllZero<T extends string> =
//   T extends `${infer F extends string}${infer R extends string}`
//     ? F extends "0"
//       ? isAllZero<R>
//       : false
//     : true;
// type Integer<T> = T extends number
//   ? `${T}` extends `${infer R extends number}.${infer N extends string}`
//     ? isAllZero<N> extends true
//       ? R
//       : never
//     : [number] extends [T]
//     ? never
//     : T
//   : never;
type Integer<T extends number> = number extends T
  ? never
  : `${T}` extends `${string}.${string}`
  ? never
  : T;
