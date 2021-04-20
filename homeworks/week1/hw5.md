## 1. 請解釋後端與前端的差異。
前端負責瀏覽器畫面上看到的東西，例如用來決定畫面內容的 html 、管理畫面美觀樣式的 css、以及決定頁面互動的 javascript。
後端則負責處理和資料庫的溝通。接受前端對於資料的請求，從資料庫抓取需要的內容之後，回傳適當的回應給前端。

## 2. 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. Google 瀏覽器會叫你電腦的作業系統（windows, OS…）送出查詢「Javascript」的 request
2. 作業系統會叫你這台電腦的網路卡去送出查詢「Javascript」的 request
3. 你電腦的網路卡會到 google 的雲端 server 去，請他查詢「Javascript」
4. google 的雲端 server 去問資料庫，請他查詢「Javascript」
5. 資料庫找到「Javascript」的搜尋結果了，回傳給 google 的雲端 server 
6. google 的雲端 server 把搜尋結果回傳到你的網路卡，你的網路卡把結果告訴作業系統，作業系統告訴瀏覽器
7. 瀏覽器解析回傳的資料，顯示出搜尋結果。

---
在看過參考解答之後，修改成以下：

1. 瀏覽器發現自己要到 google.com 送出查詢「javascript」的請求，於是檢查自己的 dns cache 有沒有 google.com，有的話直接請作業系統叫網路卡發送 request 給那個位置
2. 沒有的話，呼叫 C 語言提供的 function（例如說 gethostbyname），這個 function 會叫作業系統檢查自己的 dns cache 有沒有 google.com，有的話就叫 網路卡發送 request 給那個位置
3. 如果作業系統的dns cache 沒有 google.com，就請網路卡去 DNS Server，問 google.com 的位置。DNS server 會回傳 172.217.160.78 給網路卡。網路卡會根據這個地址，發送 request 到 google 的雲端 server 去，請他查詢「Javascript」
4. google 的雲端 server 去問資料庫，請他查詢「Javascript」
5. 資料庫找到「Javascript」的搜尋結果了，回傳給 google 的雲端 server 
6. google 的雲端 server 把搜尋結果回傳到你的網路卡，你的網路卡把結果告訴作業系統，作業系統告訴瀏覽器
7. 瀏覽器解析回傳的資料，顯示出搜尋結果。


## 3. 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. `brew install --cask 你要安裝的東西`：用 Homebrew 來安裝各種沒有內建的東西。這個指令執行之前要先安裝 homebrew。
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```
這個指令是我在安裝 iterm 字體的時候查到的。我透過這個指令安裝了 powerline font 字體。

2. `chmod u+x 檔案名` ：增加使用者執行的權限到指定的檔案。`chmod`是（change the permissions mode of a file）， `u`代表使用者，`x`是權限，`+x`代表增加權限。這個指令是也是在安裝字體時查到的，因為我在安裝後還是無法編輯 /.zshrc ，後來發現 /.zshrc 需要增加權限才能進去。

3. `file 檔案路徑`：查看檔案類型詳細資訊。如果你有一個沒有副檔名的文件，這個指令可以幫助你找到這個檔案的類型。


