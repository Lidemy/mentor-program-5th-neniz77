const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) =>
  lines.push(line))

rl.on('close', () =>
  solve(lines))

/* function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    console.log(primeOrComposite(Number(lines[i])))
  }
}

function primeOrComposite(num) {
  if (num === 1) {
    return 'Composite'
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 'Composite'
    }
  }
  return 'Prime'
}
*/

// 看完檢討後，覺得回傳 true / false 會讓函式更可以重複利用，所以重新寫了一個版本

function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    const result = isPrime(Number(lines[i])) ? 'Prime' : 'Composite'
    console.log(result)
  }
}

function isPrime(num) {
  if (num === 1) {
    return false
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
