// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>
];

// ============= Your Code Here =============
/* type RequiredByKeys<
  T extends object,
  K extends keyof T = keyof T
> = IntersectionToObj<
  {
    [I in keyof T as I extends K ? I : never]-?: T[I];
  } & T
>;
type IntersectionToObj<T> = {
  [K in keyof T]: T[K];
}; */
type RequiredByKeys<T extends object, K extends keyof T = keyof T> = Omit<
  T & Required<Pick<T, K>>,
  never
>;
