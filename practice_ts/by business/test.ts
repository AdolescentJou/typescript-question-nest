type Require<T> = {
  [p in keyof T] -?: T[p]
}