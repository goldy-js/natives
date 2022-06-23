describe("Natives - object", describeObject)

function describeObject() {
  it("stringify", itStringify)
}

function itStringify() {
  const obj = { a: "a", b: 1 }

  expect(obj._stringify()).toStrictEqual(JSON.stringify(obj))
}

// eslint-disable-next-line jest/no-export
export {}
