describe("Natives - object", describeObject)

function describeObject() {
  it("stringify", itStringify)

  it("compact", itCompact)
}

function itStringify() {
  const obj = { a: "a", b: 1 }

  expect(obj._stringify()).toStrictEqual(JSON.stringify(obj))
}

function itCompact() {
  const obj = { a: 1, b: undefined, c: null }

  expect(obj._compact()).toStrictEqual({ a: 1 })
}

// eslint-disable-next-line jest/no-export
export {}
