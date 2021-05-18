const request = require('request')

const API_ENDPOINT = 'https://restcountries.eu/rest/v2'
const name = process.argv[2]

if (!name) { // 檢討時訂正：處理未輸入國家名稱的狀況
  console.log('請輸入國家名稱')
} else {
  request(`${API_ENDPOINT}/name/${name}`, (error, response, body) => {
    if (error) {
      return console.log(`抓取失敗，錯誤訊息如下：${error}`)
    }
    let data
    try {
      data = JSON.parse(body)
    } catch (e) {
      console.log(`無法讀取資料，錯誤訊息如下：${e}`)
      return
    }
    if (data.status === 404) {
      return console.log('找不到國家資訊')
    }
    for (let i = 0; i < data.length; i++) {
      console.log(`============
        國家：${data[i].name}
        首都：${data[i].capital}
        貨幣：${data[i].currencies[0].code}
        國碼：${data[i].callingCodes}
        `)
    }
  })
}
