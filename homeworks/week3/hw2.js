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
  const temp = lines[0].split(' ')
  const from = Number(temp[0])
  const to = Number(temp[1])
  printNarci(from, to)
}

function printNarci(from, to) {
  for (let i = from; i <= to; i++) {
    const sum = sumOfNum(i)
    if (sum === i) {
      console.log(i)
    }
  }
}

function sumOfNum(n) {
  const str = n.toString()
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(Number(str[i]), str.length)
  }
  return sum
}
