describe("Natives - array", describeArray)

function describeArray() {
  it("toH", itToH)

  it("last", itLast)
}

function itToH() {
  const arr = [
    ["foo", "my foo value"],
    ["bar", "my bar"],
  ]

  expect(arr._toH()).toStrictEqual({
    foo: "my foo value",
    bar: "my bar",
  })
}

function itLast() {
  const arr = [1, 2, 3]

  expect(arr._last()).toBe(3)
}

// eslint-disable-next-line jest/no-export
export {}
