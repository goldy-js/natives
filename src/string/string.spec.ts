describe("Natives - string", describeString)

function describeString() {
  it("stringify", itStringify)

  it("parse", itParse)
}

function itStringify() {
  const str = "some str"

  expect(str._stringify()).toBe(str)
}

function itParse() {
  const str = JSON.stringify({ a: "a", b: 1 })

  expect(str._parse()).toStrictEqual(JSON.parse(str))
}

// eslint-disable-next-line jest/no-export
export {}
