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
  const count = lines[0]
  for (let i = 1; i <= count; i++) {
    const [a, b, k] = lines[i].split(' ')
    console.log(whoWin(a, b, k))
  }
}

function whoWin(a, b, k) {
  if (a === b) {
    return 'DRAW'
  }
  if (k === '-1') {
    const temp = a
    a = b
    b = temp
  }
  if (a.length === b.length) {
    return a > b ? 'A' : 'B'
  }
  return a.length > b.length ? 'A' : 'B'
}
