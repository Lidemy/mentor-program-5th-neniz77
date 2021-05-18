const request = require('request')

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com' // 檢討時發現可以先宣告 endpoint 的 base url

request(`${API_ENDPOINT}/books?_limit=10`,
  (error, response, body) => {
    if (error) {
      return console.log(`抓取失敗，錯誤訊息如下：${error}`)
    } // 檢討時發現應該先處理 error 情況
    let data
    try { // 檢討時發現要用 try-catch 處理 body 不是合法的 JSON 字串的情況
      data = JSON.parse(body)
    } catch (e) {
      console.log(`無法讀取資料，錯誤訊息如下：${e}`)
      return
    }
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].id} ${data[i].name}`)
    }
  })
