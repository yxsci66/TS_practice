# Conditional Type

## `infer` match rule

### match string

```typescript
type SeparateString<T extends string> = T extends `${infer F}${infer L}`
  ? [F, L]
  : never;
type t1 = SeparateString<"asd">;
// ["a", "sd"]
type t2 = SeparateString<"a">;
// ["a", ""]

```

### match number

```typescript
type MatchNumber<T extends number> =
  `${T}` extends `${infer P extends number}${infer Q}` ? [P, Q] : never;
type t1 = MatchNumber<12>;
// [1, "2"]
type t2 = MatchNumber<1>;
// never

```

### match tuple/array

```typescript
type t = [1] extends [...infer A] ? A : never;
// [1]
type tt = [1] extends [1, ...infer A] ? A : never;
// []

```

### infer multi types

[Type inference in conditional types](https://github.com/Microsoft/TypeScript/pull/21496)

#### the same type variable in *co-variant* positions causes a union type to be inferred

```typescript
type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
type T10 = Foo<{ a: string, b: string }>;  // string
type T11 = Foo<{ a: string, b: number }>;  // string | number
```

#### the same type variable in *contra-variant* positions causes an intersection type to be inferred

demo1

```typescript
/**
 * UnionToIntersection<{ foo: string } | { bar: string }> =
 *  { foo: string } & { bar: string }.
 */
type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => 0 : never
) extends (arg: infer I) => 0
  ? I
  : never;
```

demo2

```typescript
type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;
type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number
```
