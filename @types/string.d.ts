declare global {
  interface String {
    /**
     * someVar._parse() == JSON.parse(someVar)
     */
    _parse(): any

    /**
     * someVar._stringify() == JSON.stringify(someVar)
     *
     * For compatibility with the extended {@link Object._stringify},
     * so we could safetly call
     * maybeAStringVar._stringify()
     */
    _stringify(): this
  }
}

export default {}
