const request = require('request')

request('https://lidemy-book-store.herokuapp.com/books',
  (error, response, body) => {
    const json = JSON.parse(body)
    for (let i = 0; i < 10; i++) {
      console.log(`${i} ${json[i].name}`)
    }
  })
