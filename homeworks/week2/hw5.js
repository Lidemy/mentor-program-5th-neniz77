function join(arr, concatStr) {
  let result = arr[0]
  for(var i = 1; i < arr.length; i++){
  	result += concatStr + arr[i]
  }
  return result
}

function repeat(str, times) {
	var result = ''
  for(var i = 1; i <= times; i++){
  	result += str
  }
  return result
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));


