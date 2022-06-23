export const isDev = _isDev
export const isTest = _isTest

function _isDev() {
  return process.env.NODE_ENV === "development"
}

function _isTest() {
  return process.env.NODE_ENV === "test"
}
