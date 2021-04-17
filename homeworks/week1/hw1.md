## 交作業流程
## ㄧ、設定作業 repo
### 1-1 產生 repo
用 GitHub Classroom 的連結來自動產生一個名稱叫做 Lidemy/mentor-program-5th-(你的GitHub帳號) 的 repository，這個就是之後用來交作業的地方。

### 1-2 把這個遠端資料庫 clone 到自己的電腦
在 repo 頁面「 下載 code」的圖示點開，複製資料庫連結網址。接著在你電腦找到一個想放這個資料庫的資料夾，在 terminal  切換到那個資料夾，輸入 `git clone 網址`。

## 二、開新 branch 寫作業
根據 GitHub flow 工程師協作資料庫的規範，每當想要增加或修改資料庫時，要先新增一個 branch，pull request 讓大家討論、修正這個更動之後，最後再 merge 回去原本的 master branch。每週的交作業，也會依照這個流程來進行。

### 2-1 新增一個本機端的 branch
之後每週交作業，就是一週開一個新的 branch 來提交這個更動。

1. 在 terminal 輸入 `git branch week1`產生一個新的叫做 week1 的 branch
2. `git checkout week1` 來切換到 week1 的這個 branch

也可以直接 `git checkout -b week1` 來合併這兩個步驟，同時開一個新的 branch 又切換到新的 branch。

### 2-2 把本機端的新 branch 推到遠端
本機端有了一個新的 branch，遠端也有個對應的新 branch，兩邊的版本才能同步。方法是在切換到 week1 這條 branch的狀態下，輸入 `git push origin week1` 。意思是把本機端目前的這個branch 推到 origin 這個遠端 repository 裡，然後把遠端的新 branch 命名為 week1。

 
### 2-3 編輯作業檔案
你的電腦裡應該會有 mentor-program-5th-(你的GitHub帳號) 這個資料夾，點開 homeworks /week1 資料夾，可以看到第一週的作業檔案，直接點開編輯。
####  注意：
1. 不要自己開新的檔案。
2. 要確認是在切換到 week1 這條 branch 的狀態下，對檔案進行編輯。

## 三、提交新版本與同步
完成第一週作業之後，接著要執行以下步驟。

### 3-1 在本機端提交新版本
輸入 `git commit -am “提交第一週作業”`，謹慎一點的話可以再輸入 `git status` 確認一下有沒有檔案未被 commit。

### 3-2 同步到遠端資料庫
輸入`git push` 來把 commit 後的新版本推送到遠端的資料庫。

## 四、Pull request
1. 到 GitHub pull request 的分頁，按綠色按鈕 create pull request。在 
2. base 選擇 master，compare 選擇你這週新增的 branch 名稱，第一週就是 week1。意思是你要請求把 week1 合併到 master 這條 branch。
3. 可以在下方輸入一些關於這次 pull request 的說明。
