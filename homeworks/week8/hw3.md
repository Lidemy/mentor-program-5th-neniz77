## 什麼是 Ajax？
asynchronous javascript and xml ，透過 javascript 程式語言，以 xml 的資料交換方法（近年已有更多的方法，不侷限於 xml），進行非同步的傳輸資料方式。「非同步」的意思在於 client 端送出 request 之後，不需要等待 server 回傳結果，仍可以持續做其他事情，甚至繼續發出其他 request ;而 server 回傳的 response 則會被即時融入原本的畫面中，而不需刷新一整個頁面。

## 用 Ajax 與我們用表單送出資料的差別在哪？
最大的差別在於傳輸資料是否同步，也就是說傳送資料時是否需要刷新一整個頁面。瀏覽器透過表單傳輸資料時，會直接拿 server 回傳的 response 來 render，因此會刷新一整個頁面來 render response；用 ajax 則是在拿到 response 後，先交給 javascript 做處理，這樣就能夠做到只刷新部分頁面內容來和 server 交換資料。

由於用表單傳輸資料需要 render 一整個頁面，所以 server 和瀏覽器的資料交換量大、所需時間也較久；Ajax 則只需要交換需要更動的資料即可，資料交換量小，所需時間也較少。

## JSONP 是什麼？
JSON with padding，是為了解決基於同源政策（same origin policy）而無法透過瀏覽器進行跨網域資料傳輸的問題。這個方法利用了 script 標籤元素不受同源政策限制，可以進行跨網域請求的特性。使用 JSONP 的步驟大致如下：
1. 建立<script src=“欲取得資料的網址與queryString”></script>，並宣告一個用來處理資料的 callback function。可以透過 GET 方式告訴 server 想要哪些資料以及會用哪個 function 處理資料。( JSONP 只能用 GET 無法用 POST 來傳輸資料）
2. Server 收到請求後會回傳一個 javascript 檔案，這個 javascript 檔案會執行你要求的 callback function，這個 callback function 傳入的參數就是你請求的資料，而通常這個資料格式是 JSON。這也就是 JSON with padding 為何叫這個名字的原因，因為 server 會把回傳的資料用 JSON 的格式填入（padding）你的 callback function。

## 要如何存取跨網域的 API？
透過瀏覽器傳送請求時，瀏覽器會自動帶上一個 header 叫做 origin，裡面記錄了傳送請求者的網域，一旦和 server 端有著不同的 origin，瀏覽器便會把 response 擋下來。當我們想存取跨網域的 API 時，就要透過 CORS（Cross-Origin Resource Sharing）跨來源資源共享。CORS 規定，server 端可以在 response header 帶上 `Access-Control-Allow-Origin` 來設定誰可以進行跨網域存取。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週是直接由 node.js 傳送 request，這週則是透過瀏覽器傳送 request，基於 same origin policy 同源政策，當傳送 request 的的 client 端網域和傳送 response 的 server 端不一樣時，瀏覽器會把回傳的 response 擋下來。

參考資料:
[使用 JSONP 跨站請求](https://openhome.cc/Gossip/JavaScript/JSONP.html)
[JSONP (JSON with Padding)](https://www.fooish.com/json/jsonp.html)
[什麼是 Ajax？ 搞懂非同步請求 (Asynchronous request)概念](https://tw.alphacamp.co/blog/ajax-asynchronous-request)
[同學 estella00911 的作業](https://github.com/Lidemy/mentor-program-5th-estella00911/blob/master/homeworks/week8/hw3.md)
