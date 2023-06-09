// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Obj = {
  a: number;
  b: string;
  c: boolean;
  obj: {
    d: number;
    e: string;
    f: boolean;
    obj2: {
      g: number;
      h: string;
      i: boolean;
    };
  };
  obj3: {
    j: number;
    k: string;
    l: boolean;
  };
};

type cases = [
  Expect<Equal<DeepPick<Obj, "">, unknown>>,
  Expect<Equal<DeepPick<Obj, "a">, { a: number }>>,
  Expect<Equal<DeepPick<Obj, "a" | "">, { a: number } & unknown>>,
  Expect<
    Equal<DeepPick<Obj, "a" | "obj.e">, { a: number } & { obj: { e: string } }>
  >,
  Expect<
    Equal<
      DeepPick<Obj, "a" | "obj.e" | "obj.obj2.i">,
      { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
    >
  >
];

// ============= Your Code Here =============
// your answers
type TypeGet<T, Paths> = Paths extends `${infer A}.${infer B}`
  ? A extends keyof T
    ? { [K in A]: TypeGet<T[A], B> }
    : never
  : Paths extends keyof T
  ? { [K in Paths]: T[Paths] }
  : never;

type UnionToIntercetion<U> = (U extends any ? (arg: U) => any : never) extends (
  arg: infer I
) => any
  ? I
  : never;

type DeepPick<T, PathUnion extends string> = UnionToIntercetion<
  TypeGet<T, PathUnion>
>;
