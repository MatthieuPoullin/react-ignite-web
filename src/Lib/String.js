export function up (str = '') {
  return str.toUpperCase()
}

export function parenthesis (string) {
  return '(' + string + ')'
}

export function getLastPartOfString (str = '', delimiter = '/') {
  return str.split(delimiter).pop()
}

export function pluralize (word, count) {
  var pluralized = count <= 1
      ? word : word + 's'

  return pluralized
}
