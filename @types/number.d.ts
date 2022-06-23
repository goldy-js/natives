declare global {
  interface Number {
    /**
     * @examples
     * 5110._prettify() -> 5.1k
     * 5110._prettify(2) -> 5.10k
     * 1000000._prettify() -> 1m
     */
    _prettify(digits?: number): string
  }
}

export default {}
