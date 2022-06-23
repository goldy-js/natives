import { isDev } from "../utils/env"

Object.defineProperty(Object.prototype, "_stringify", {
  writable: false,
  enumerable: false,
  configurable: false,

  // in production we don't want to space the values since many loggers
  // will treat that as separate logs
  value({ spacing = isDev() ? 2 : 0 } = {}) {
    return JSON.stringify(this, null, spacing)
  },
})
