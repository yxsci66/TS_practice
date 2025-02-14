// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Get<Data, "hello">, "world">>,
  Expect<Equal<Get<Data, "foo.bar.count">, 6>>,
  Expect<Equal<Get<Data, "foo.bar">, { value: "foobar"; count: 6 }>>,
  Expect<Equal<Get<Data, "foo.baz">, false>>,

  Expect<Equal<Get<Data, "no.existed">, never>>
];

type Data = {
  foo: {
    bar: {
      value: "foobar";
      count: 6;
    };
    included: true;
  };
  "foo.baz": false;
  hello: "world";
};

// ============= Your Code Here =============
type Get<T, K extends string> = K extends keyof T
  ? T[K]
  : K extends `${infer F}.${infer R}`
  ? Get<T[F & keyof T], R>
  : T[K & keyof T];
