//join
function join(arr, concatStr) {
  if(arr.length === 0) 
    return '' // 看解答才想到，要處理空字串的狀況

  let result = arr[0]
  for(var i = 1; i < arr.length; i++){
  	result += concatStr + arr[i]
  }
  return result
}

//repeat
function repeat(str, times) {
	var result = ''
  for(var i = 1; i <= times; i++){
  	result += str
  }
  return result
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));

console.log(join(["aaa", "bb", "c", "dddd"], ',,'))

