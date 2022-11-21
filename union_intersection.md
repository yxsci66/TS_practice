# union and intersection types

## union with Mapped Types

```typescript

type ObjUnion = { a: 1 } | { b: 2; a: 2 };
type ObjUnionKey = keyof ObjUnion;
// "a"

```

## intersection with Mapped Types

```typescript

type ObjInter = {
  a: 1;
} & {
  a: 2;
  b: 2;
};
// never

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
