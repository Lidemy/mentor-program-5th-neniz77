const request = require('request')

/* 輸出範例
node hw2.js list // 印出前二十本書的 id 與書名
node hw2.js read 1 // 輸出 id 為 1 的書籍
node hw2.js delete 1 // 刪除 id 為 1 的書籍
node hw2.js create "I love coding" // 新增一本名為 I love coding 的書
node hw2.js update 1 "new name" // 更新 id 為 1 的書名為 new name
*/

switch (process.argv[2]) {
  case 'list':
    request('https://lidemy-book-store.herokuapp.com/books',
      (error, response, body) => {
        const json = JSON.parse(body)
        for (let i = 0; i < 20; i++) {
          if (json[i] === undefined) {
            console.log('以下從缺')
            return
          }
          console.log(`${json[i].id} ${json[i].name}`)
        }
      })
    break

  case 'read':
    request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (error, response, body) => {
        const json = JSON.parse(body)
        console.log(json.name)
      })
    break

  case 'delete':
    request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (error, response, body) => {
        console.log(`已刪除 id = ${process.argv[3]} 的項目`)
      })
    break

  case 'create':
    request.post({
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: { name: process.argv[3] }
    },
    (error, response, body) => {
      console.log(`已新增${process.argv[3]}`)
    })
    break

  case 'update':
    request.patch({
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: { name: process.argv[4] }
    },
    (error, response, body) => {
      console.log(`將 id = ${process.argv[3]} 的項目修改為「${process.argv[4]}」`)
    })
    break
}
