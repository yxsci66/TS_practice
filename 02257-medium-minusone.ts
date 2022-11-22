// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>
];

// ============= Your Code Here =============

/**
 * @Solution 1
 * @Feature recursive for T times
 * @Attention If T > 1000, return type any
 */

type MinusOne1<T extends number, A extends any[] = []> = A["length"] extends T
  ? Pop<A>["length"]
  : MinusOne1<T, [any, ...A]>;

type Pop<T extends any[]> = T extends [...infer head, any]
  ? head
  : { length: -1 };

/**
 * @Solution 2
 *
 */
type MinusOne<T extends number> = T extends 0
  ? -1
  : ParseInt<
      RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>
    >;
type ParseInt<T extends string> = T extends `${infer Digit extends number}`
  ? Digit
  : never;
type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : "";
type RemoveLeadingZeros<S extends string> = S extends "0"
  ? S
  : S extends `${"0"}${infer R}`
  ? RemoveLeadingZeros<R>
  : S;
type InternalMinusOne<S extends string> =
  S extends `${infer Digit extends number}${infer Rest}`
    ? Digit extends 0
      ? `9${InternalMinusOne<Rest>}`
      : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`
    : never;
