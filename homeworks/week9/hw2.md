## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼？
|        | text                                            | varchar                                                      |
|--------|-------------------------------------------------|--------------------------------------------------------------|
| 長度限制   | 是一個固定的空間，可以容納 65535 個 character，需要 2 個字節空間來記錄長度 | 是一個可變的空間，最大空間可容納 65535 個 character，若使用 utf-8 編碼則是 (65535-2)/3=21844 個字符 |
| 能否有預設值 | x                                               | v                                                            |


參考資料：[https://stackoverflow.com/questions/25300821/difference-between-varchar-and-text-in-mysql](https://stackoverflow.com/questions/25300821/difference-between-varchar-and-text-in-mysql)

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

### Http Stateless

要了解 cookie 是什麼，要先知道 http 協定是個無狀態（stateless）的協定。無狀態的意思就是，server 不會記住上次發 request 的 client 是誰、這個 request 的內容為何，每次的 request 都被視為唯一而獨立。

但在某些情況下，我們需要讓 server 認出 client 端是誰、它之前做了什麼事情。例如會員登入的機制就是一個經典的例子。當我們在網站上進行會員登入後到登出前的這段時間內，server 回傳的所有 response 都會記住使用者「有進行登入」的狀態。還有像是購物網站的購物車、要做到這件事，就要使用到 session 的概念。

### Session

session 指的是「兩個系統之間可以互相溝通的一段有限的時間」，也就是在一段有限的時間當中，讓 server 記住 client 前面做過的事情。有幾種方法可以創造 session，Cookie 就是其中一個可以用來實作 session 的方法。

### Cookie

Cookie 是一套由瀏覽器所提供、可以用來實作 session 的機制。如何用 cookie 來實作會員登入機制呢？Server 在收到 client 端登入的 request 之後，在 response header 中加入 Set-Cookie Header 並儲存使用者的登入資訊。瀏覽器收到這個 Set-Cookie Header 後，就會把使用者的登入資訊儲存起來，在後續符合條件的 request 都加入存有這個登入資訊的 cookie header，如此一來就創造了可以記住狀態的 session。

「符合條件」指的是，每個 cookie 有一些可以設定的選項，要符合條件才能寫入資訊和傳送。例如無法寫入其他 domain 的 cookie。

這邊用會員身份認證當例子，但身份驗證只是 cookie 的用途之一，cookie 的本質是一個可以用來儲存資訊的容器，可以讓伺服器寫入資訊、也可以讓瀏覽器發送帶有 cookie 資訊的請求。

參考資料：

http stateless：
[Module Reference, January 31, 2005](https://thejimmyg.github.io/pythonweb/projects/webmodules/doc/0.5.0/html_multipage/lib/node131.html)
https://thejimmyg.github.io/pythonweb/projects/webmodules/doc/0.5.0/html_multipage/lib/node131.html)

session 的定義：[https://techterms.com/definition/session](https://techterms.com/definition/session)

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

1. 因為 users 和 comments 的資料庫之間沒有連動的關係，使用者也無法編輯和更新自己的留言；在刪除使用者帳號後，留言也無法跟著被刪除。
2. 密碼是明碼沒有經過處理，所以如果資料庫被駭客入侵，資料就直接外洩惹。

參考資料：[同學 Jennie 的作業](https://github.com/Lidemy/mentor-program-5th-JennieChu713/blob/master/homeworks/week9/hw2.md)


