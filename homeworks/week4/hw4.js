const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '4wiww36eeo54svja4rq9u514aw6e0o'
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
