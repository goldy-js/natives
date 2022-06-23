describe("Natives - number", describeNumber)

function describeNumber() {
  it("prettify", itPrettify)
}

function itPrettify() {
  const n = 5105

  expect(n._prettify()).toBe("5.1k")
}

// eslint-disable-next-line jest/no-export
export {}
