Object.defineProperty(Array.prototype, "_toH", {
  writable: false,
  enumerable: false,
  configurable: false,

  value() {
    return this.reduce(
      (acc: object, [key, val]: [string, any]) => ({
        ...acc,
        [key]: val,
      }),
      {},
    )
  },
})

Object.defineProperty(Array.prototype, "_last", {
  enumerable: false,
  configurable: false,

  value() {
    return this[this.length - 1]
  },
})
