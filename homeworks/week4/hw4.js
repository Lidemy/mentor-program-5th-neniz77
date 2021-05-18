const request = require('request')

const BASE_URL = 'https://api.twitch.tv/kraken'
const CLIENT_ID = '4wiww36eeo54svja4rq9u514aw6e0o'
const options = {
  url: `${BASE_URL}/games/top`,
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': CLIENT_ID
  }
}

function callback(error, response, body) { // 不太知道為什麼這個函數叫做 callback
  if (!error && response.statusCode === 200) {
    const json = JSON.parse(body)
    for (let i = 0; i < json.top.length; i++) {
      console.log(`${json.top[i].viewers} ${json.top[i].game.name}`)
    }
    console.log('....')
  }
}

request(options, callback)
