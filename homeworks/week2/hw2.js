function capitalize(str) {
  let firstCase = str[0].toUpperCase()
  return str.replace(str[0], firstCase)
}
console.log(capitalize('hello'));
