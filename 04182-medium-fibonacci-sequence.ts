// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
];

// ============= Your Code Here =============
/* type NumberToArray<
  N extends number,
  C extends number[] = []
> = C["length"] extends N ? C : NumberToArray<N, [...C, 0]>;

type A<X extends number, Y extends number> = [
  ...NumberToArray<X>,
  ...NumberToArray<Y>
]["length"];

type Fibonacci<
  T extends number,
  C extends number = 2,
  P extends number = 0,
  S extends number = 1
> = T extends 1 | 2
  ? 1
  : T extends C
  ? A<P, S>
  : Fibonacci<T, A<C, 1> & number, S, A<P, S> & number>;
 */
type Fibonacci<
  T extends number,
  No extends 1[] = [1, 1, 1],
  N_2 extends 1[] = [1],
  N_1 extends 1[] = [1]
> = T extends 1 | 2
  ? 1
  : T extends No["length"]
  ? [...N_2, ...N_1]["length"]
  : Fibonacci<T, [...No, 1], N_1, [...N_2, ...N_1]>;
type MatchNumber<T extends number> =
  `${T}` extends `${infer P extends number}${infer Q}` ? [P, Q] : never;
type t1 = MatchNumber<12>;
// [1, "2"]
type t2 = MatchNumber<1>;
// never
