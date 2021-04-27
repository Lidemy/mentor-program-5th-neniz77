function capitalize(str) {
  let temp = 'a'
  if(str[0] >= 'a' && str[0] <= 'z'){
  	temp = String.fromCharCode(str.charCodeAt(0) - 32)
  	str = str.replace(str[0], temp)
  }
  return str
}
console.log(capitalize('hello'));
