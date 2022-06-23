Object.defineProperty(String.prototype, "_parse", {
  writable: false,
  enumerable: false,
  configurable: false,

  value() {
    return JSON.parse(this)
  },
})

Object.defineProperty(String.prototype, "_stringify", {
  writable: false,
  enumerable: false,
  configurable: false,

  // empty arg for compatibility with the extended object native method
  // so we could safetly call unknownVar._stringify()
  value({} = {}) {
    return this
  },
})
