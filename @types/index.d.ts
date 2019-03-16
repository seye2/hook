type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type NullableString = string | null;

type NullableNumber = number | null;

type Nullable<T> = T | null;

type MappedObject<T extends string, R> = { [K in T]?: R };

type ValuesOf<T> = T[keyof T];

type ValueOf<T, K extends keyof T> = T[K];
