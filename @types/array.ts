declare global {
  interface Array<T> {
    /**
     * inspired by ruby .to_h
     * @example
     * [["key", "value"]]._toH() -> { key: "value" }
     */
    _toH(): object

    /** returns the last element of the array */
    _last: any
  }
}

export default {}
