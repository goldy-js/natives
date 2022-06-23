declare global {
  interface Object {
    /**
     * obj._stringify() === JSON.stringify(obj, null, 2)
     */
    _stringify({ spacing } = { spacing: number }): string
  }
}

export default {}
