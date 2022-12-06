// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

// ============= Your Code Here =============
type ToUnion<U> = U extends any[] ? U[number] : U;
type Without<T extends any[], U extends number | any[]> = T extends [
  infer P,
  ...infer Q
]
  ? P extends ToUnion<U>
    ? [...Without<Q, U>]
    : [P, ...Without<Q, U>]
  : T;
