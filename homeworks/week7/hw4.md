## 什麼是 DOM？
#### DOM 是什麼？
全名是 Document Object Model，作用是把 HTML 和 XML 文件裡的所有內容定義成類似物件的東西，讓這些物件形成樹狀結構。樹狀結構是由一個一個節點（node）所組成，在 DOM 中主要有四種節點：document（整份文件）、element（文件內的各種標籤）、text（被標籤包起來的文字）、attribute（文件各標籤內的屬性）。

#### 為什麼要有 DOM？
DOM 是 W3C 定義的一個 API，瀏覽器會根據 DOM 的規範去設計如何解析文件，而工程師則能透過 DOM 讓程式可以存取並改變 HTML 和 XML 文件的架構、風格與內容。特別注意，雖然常常拿 Javascript 來存取 DOM，但 DOM 本身並不是 javascript 的一部分，而是 「 javascript 和 html 文件之間的橋樑」。

#### 如何操作 DOM？
選取到文件的節點之後，去操作或變更文件的內容、風格或結構。
1. 選取到文件的節點 ex. `getElementById()`、`querySelector()`、`querySelectorAll()`
2. 變更內容 ex. `innerHTML`、`textContent`	


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件傳遞機制實際上有三個階段，按照順序分別是：捕獲（CAPTURING_PHASE)、元素本身(AT_TARGET)、冒泡（BUBBLING_PHASE)。可以想像成事件先從 DOM tree 的樹幹位置傳遞到樹枝末端，這就是捕獲階段；再從樹枝末端傳遞到樹幹，這個則是冒泡階段。

## 什麼是 event delegation，為什麼我們需要它？
如果想要控制許多子元素，而尋找這些子元素的過程都會經過同一個父元素，與其在一個一個子元素上都放上監聽器，不如統一加在父元素身上。這樣利用事件傳遞機制的概念，透過父元素來代理子元素的事件，就叫 event delegation 事件代理。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
`event.preventDefault() ` 是阻止元素的預設動作，`event.stopPropagation()` 則是停止事件的傳遞。
```html
<div class="outer">
      <a href="#" class="inner">測試</a>
    </div>
```

```javascript
// 因為阻止元素的預設動作發生，所以當點擊 inner 時，a 連結預設的跳轉頁面並不會發生
document.querySelector(".inner").addEventListener("click", (e) => {
  e.preventDefault();
});
// 阻止 element 的預設事件並不影響事件傳遞，所以當 click 事件冒泡到 outer 時，會 alert「冒泡到 outer」
document.querySelector(".outer").addEventListener("click", (e) => {
  alert("冒泡到outer");
});
```

```javascript
//阻止事件傳遞不影響元素的動作本身，所以 a 連結會頁面。因為在 inner 阻止了事件繼續傳遞，所以 click 事件不會向上冒泡到 outer，放在 outer 的 eventListner 也就無法監聽到 click 事件，所以不會出現 alert。
document.querySelector('.inner').addEventListener('click',(e) => {
	e.stopPropagation()
})
document.querySelector(".outer").addEventListener("click", (e) => {
  alert("冒泡到outer");
});
```

