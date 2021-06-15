## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. <pre>：preformatted text。可以完整保存原始文字內容的格式，包括換行和空白。常用於網頁中請使用者輸入一段文字後，在瀏覽頁面顯示該段文字時。
2. <textarea> ：用於 form 表單中，讓使用者能在輸入框中輸入多行的文字。可以透過 `rows`、`cols` 屬性設定寬高；`maxlength`、`minlength` 屬性設定輸入的文字長度限制。
3. <select>：下拉式選單，要配合  <option> 來使用。也可以搭配  <optgroup> 來幫選項分組。

#### 參考資料
- [認識 HTML <pre> tag](https://medium.com/unalai/%E8%AA%8D%E8%AD%98-html-pre-tag-3be6d5f32e54)
- [HTML <textarea> 表單多行文字輸入欄位](https://www.fooish.com/html/textarea-tag.html)
- [HTML 下拉式選單 - <select>, <option>, <optgroup> 標籤 (tag)](https://www.fooish.com/html/select-option-optgroup-tag.html)
## 請問什麼是盒模型（box model）
可以 html 元素把想像成一個一個盒子，盒模型 Box model 由四個部分組成，由內而外是 content(盒子的內容物)、padding(內容和邊框的距離)、border(邊框)、margin(邊框和其他盒子的距離)。透過 CSS 對盒模型的各個部分進行樣式設定，可以決定元素在網頁畫面上的大小與元素之間的距離。

- [什麼是盒模型](https://laiyenju.github.io/what-is-box-model)
- [CSS 盒子模型](https://www.runoob.com/css/css-boxmodel.html)
## 請問 display: inline, block 跟 inline-block 的差別是什麼？
### [display: inline]
1. 元素可以在行內呈現，圖片和文字均不換行
2. 元素無法設定寬高，只能由內容撐開
3. 可以設定 margin/padding，但上下的 margin/padding 不會推開其他行的元素，也就是會疊在其他行的內容上。
### [display:block]
1. 元素寬度預設會佔滿容器的寬度
2. 設定長寬/padding/margin 均可設定

### [display: inline-block]
1. 像 inline 一樣可以呈現在行內、可以使元素出現在同一行，但又有 block 的特性可以設定長寬/padding/margin。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
### [position: static]
是 position 屬性的預設值。left、top、right、bottom 的設定在 position: static 時是無效的。
### [position:relative]
以自己在排版流當中原本的位置作為定位的基準，指定上下左右的偏移，但不會脫離排版流、原本的空間也不會消失。
### [position:absolute]
脫離預設的排版配置，往上層找到非 position: static 的元素作為定位的基準。因為脫離一般的排版流，也會讓後續的元素自動遞補上它原本的位置。
### [position:fixed]
以整個視窗作為基準來定位，就算拉動捲軸，還是會固定在畫面上的同一個位置。
##### 參考資料
[position 屬性的基礎概念](https://medium.com/ui-ux練功坊/position-屬性的基礎概念-5931254e5203)