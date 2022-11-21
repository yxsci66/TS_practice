// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
  Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
  Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
  Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
  Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
  Expect<Equal<KebabCase<"-">, "-">>,
  Expect<Equal<KebabCase<"">, "">>,
  Expect<Equal<KebabCase<"😎">, "😎">>
];

// ============= Your Code Here =============
/**
 * 1. detect UpperCase
 * 2. transform UpperCase
 */
type IsLower<T extends string> = T extends `${Lowercase<T>}` ? true : false;
/* type KebabCase<S, T extends boolean = true> = S extends `${infer B}${infer E}`
  ? IsLower<B> extends false
    ? T extends true
      ? `${Lowercase<B>}${KebabCase<E, false>}`
      : `-${Lowercase<B>}${KebabCase<E, false>}`
    : `${B}${KebabCase<E, false>}`
  : S; */
type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;
