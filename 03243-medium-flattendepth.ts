// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<
    Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
  >
];

// ============= Your Code Here =============
type FlattenDepth<
  T extends any[],
  N extends number = 1,
  Array extends any[] = []
> = T extends FlattenOnce<T>
  ? T
  : N extends Array["length"]
  ? T
  : FlattenDepth<FlattenOnce<T>, N, [...Array, 0]>;
type FlattenOnce<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...F, ...FlattenOnce<R>]
    : [F, ...FlattenOnce<R>]
  : T;
