## 請以自己的話解釋 API 是什麼
API (Application Programming Interface) 是一個方便資料交換的介面。
如果是想使用某應用程式資料的人，可以照著 API 文件上的說明，對 API 說出他對資料的需求。應用程式接收到 API 傳來的需求，處理並給出相對應的回應，再請 API 把回應帶回來給使用者。 使用者不必知道應用程式背後到底進行了哪些操作，只要透過 API 傳達需求，就可以拿到想要的回應。如果是應用程式的擁有者，則可以透過 API 的設計，決定資料要如何開放給外界索取或修改。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- 201 Created：request 成功（需求已被接受，並成功給予回應），並建立了新的資料。通常會在 request method 為 put（取代原本的東西） 或 post（傳一些資訊給對方) 的時候出現。
- 400 Bad Request：伺服器收到無效的語法，無法理解 request 的內容。
- 204 no content：這個 response 本身沒有內容，但 header 帶有有用的資訊。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base url: https://my-restaurant-yummy.com

### Request URL 描述

| 說明       | Method | path            | 參數               | 範例                   |
|----------|--------|-----------------|------------------|----------------------|
| 回傳所有餐廳資料 | GET    | /restaurant     | _limit: 限制回傳資料數量 | /restaurant?_limit=5 |
| 回傳單一餐廳資料 | GET    | /restaurant/:id |                  | /restaurant/10       |
| 刪除餐廳     | DELETE | /restaurant     | 無                |                      |
| 新增餐廳     | POST   | /restaurant     | name: 餐廳名        |                      |
| 更改餐廳     | PATCH  | /restaurant/:id | name: 餐廳名        |                      |

### 參數說明
`_limit`：num
`name`：string

### Request 請求範例
方法ㄧ：在終端機使用 curl 發 request
```javascript
//以新增一間名為「鼎太瘋」的餐廳為例
 curl -X POST -d "name=鼎太瘋" "https://my-restaurant-yummy.com/restaurant"
```

方法二：在 Node.js 環境下，使用 npm 套件 `request` 發送 HTTP request
```javascript
//以回傳 id = 10 的餐廳資料為例
const request = require('request')
request("https://my-restaurant-yummy.com/restaurant/10",
      (error, response, body) => {
        const json = JSON.parse(body)
        console.log(json)
      })
```

### Response 欄位說明（格式：JSON）
| key     | 類型     | 說明   |
|---------|--------|------|
| id      | num    | 餐廳編號 |
| name    | string | 餐廳名稱 |
| type    | string | 餐廳類型 |
| address | string | 餐廳地址 |
| phone   | string | 餐廳電話 |