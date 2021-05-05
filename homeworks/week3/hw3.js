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
