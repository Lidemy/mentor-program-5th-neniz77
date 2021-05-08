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
  const n = lines[0]
  printStar(n)
}

function printStar(n) {
  for (let i = 0; i < n; i++) {
    const result = '*'.repeat(i + 1)
    console.log(result)
  }
}
