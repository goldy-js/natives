declare global {
  interface Object {
    /**
     * obj._stringify() === JSON.stringify(obj, null, 2)
     */
    _stringify({ spacing } = { spacing: number }): string

    /**
     * const obj = { a: 1, b: undefined, c: null }
     * obj._compact() -> { a: 1 }
     */
    _compact(): string
  }
}

export default {}
