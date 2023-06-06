// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Format<"abc">, string>>,
  Expect<Equal<Format<"a%sbc">, (s1: string) => string>>,
  Expect<Equal<Format<"a%dbc">, (d1: number) => string>>,
  Expect<Equal<Format<"a%%dbc">, string>>,
  Expect<Equal<Format<"a%%%dbc">, (d1: number) => string>>,
  Expect<Equal<Format<"a%dbc%s">, (d1: number) => (s1: string) => string>>
];

// ============= Your Code Here =============
type Format<T extends string> = T extends `${infer F}%${infer M}${infer R}`
  ? M extends "%"
    ? Format<`${F}${R}`>
    : M extends "d"
    ? (v: number) => Format<`${F}${R}`>
    : (v: string) => Format<`${F}${R}`>
  : string;
