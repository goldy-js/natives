// 1205 -> 1.2k
// 12050 -> 12k
// 1205000 -> 1.2m
Object.defineProperty(Number.prototype, "_prettify", {
  writable: false,
  enumerable: false,
  configurable: false,

  value(digits = 1) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    const item = lookup
      .slice()
      .reverse()
      .find((_item) => this >= _item.value)

    return item
      ? (this / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0"
  },
})
