# union and intersection types

## union with Mapped Types

```typescript

type ObjUnion = { a: 1 } | { b: 2; a: 2 };
type ObjUnionKey = keyof ObjUnion;
// "a"

```

## intersection with Mapped Types

### demo1

```typescript

type ObjInter = {
  a: 1;
} & {
  a: 2;
  b: 2;
};
// never

```

### demo2

```typescript
type tq = { a?: 1; b?: 2; c: 3 } & { a: 1 };
type c = {
  [k in keyof tq]: tq[k];
};
/* {
    a: 1;
    b?: 2 | undefined;
    c: 3;
} */

```

## Mapped Types

```typescript
type ObjValNever = Record<string, never>;
/* {
  [x: string]: never;
} */

type ObjKeyNever = Record<never, string>;
// {}
```

## Union To Tuple

[When inferring from a type with multiple call signatures (such as the type of an overloaded function), inferences are made from the last signature (which, presumably, is the most permissive catch-all case). It is not possible to perform overload resolution based on a list of argument types.](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types)

```typescript

type LastInIntersection<U> = U extends (x: infer P) => 0 ? P : never;

type c = LastInIntersection<((x: 1) => 0) & ((x: 2) => 0)>;//2
```
