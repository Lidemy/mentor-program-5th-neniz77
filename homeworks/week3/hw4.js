const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) =>
  lines.push(line))

rl.on('close', () =>
  solve(lines))

function solve(lines) {
  const str = lines[0]
  console.log(isPalindrome(str) ? 'True' : 'False')
}

function isPalindrome(str) {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  if (newStr === str) {
    return true
  } else return false
}
