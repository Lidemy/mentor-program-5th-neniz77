const request = require('request')

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'
const action = process.argv[2] // 檢討時修正：process.argv 重複多次出現，可以先宣告
const params = process.argv[3] // parameters 參數

// 檢討時修正：應該把功能放在 function 裡比較好閱讀
switch (action) {
  case 'list':
    listBooks()
    break

  case 'read':
    readABook(params)
    break

  case 'delete':
    deleteABook(params)
    break

  case 'create':
    createABook(params)
    break

  case 'update':
    updateAbook(params, process.argv[4])
    break
}

function listBooks() {
  request(`${API_ENDPOINT}/books?_limit=20`, (error, response, body) => {
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
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id, data[i].name)
    }
  })
}

function readABook(id) { // 檢討時修正：function 的引數命名
  request(`${API_ENDPOINT}/books/${id}`, (error, response, body) => {
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
    console.log(data)
  })
}

function deleteABook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (error, response, body) => {
    if (error) {
      return console.log(`抓取失敗，錯誤訊息如下：${error}`)
    }
    console.log(`已刪除 id = ${id} 的書籍`)
  })
}

function createABook(bookName) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: { name: bookName }
  },
  (error, response, body) => {
    if (error) {
      return console.log(`抓取失敗，錯誤訊息如下：${error}`)
    }
    console.log(`已新增「${params}」這本書`)
  })
}

function updateAbook(id, bookName) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: { name: bookName }
  },
  (error, response, body) => {
    if (error) {
      return console.log(`抓取失敗，錯誤訊息如下：${error}`)
    }
    console.log(`已將 id = ${id} 的書籍修正為「${bookName}」`)
  })
}
