# mapped type

```typescript
declare type PropertyKey = string | number | symbol;

interface PropertyDescriptor {
    configurable?: boolean;
    enumerable?: boolean;
    value?: any;
    writable?: boolean;
    get?(): any;
    set?(v: any): void;
}

interface PropertyDescriptorMap {
    [key: PropertyKey]: PropertyDescriptor;
}
```

## [Mapping modifiers](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers)

### modifiers

readonly, ?

#### modifier prefix

add(assumed):+;
remove:-;

#### Modifier -- ?

```typescript
type t = {
  a?: 1;
  b: 2;
};
type t1 = {
  [k in keyof t]: t[k];
};
// t
type t2 = {
  [k in keyof t]?: t[k];
};
/* {
  a?: 1 | undefined;
  b?: 2 | undefined;
} */
type t3 = {
  [k in keyof t]-?: t[k];
};
/* {
  a: 1;
  b: 2;
} */
```

#### Modifier -- readonly

readonly

`'readonly' type modifier is only permitted on array and tuple literal types.`
