// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];

// ============= Your Code Here =============
type LengthOfString<
  S extends string,
  T extends Array<any> = []
> = S extends `${infer P}${infer R}`
  ? LengthOfString<R, [...T, P]>
  : T["length"];

// test
type T<_T> = _T extends `${infer P}${infer R}` ? P | R : never;
type t = T<"">;
