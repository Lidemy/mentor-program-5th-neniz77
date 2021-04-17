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
1. 不要自己開新的檔案。如果真的要開新的檔案，記得 `git commit add . ` 
2. 要確認是在切換到 week1 這條 branch 的狀態下，對檔案進行編輯。

## 三、提交新版本與同步
完成第一週作業之後，接著要執行以下步驟。

### 3-1 在本機端提交新版本
輸入 `git commit -am “提交第一週作業”`，謹慎一點的話可以再輸入 `git status` 確認一下有沒有檔案未被 commit。

### 3-2 同步到遠端資料庫
輸入`git push origin week1` 來把 commit 後的新版本，推送到 origin 的 branch week1。

## 四、Pull request
1. 到 GitHub pull request 的分頁，按綠色按鈕 create pull request。在 
2. base 選擇 master，compare 選擇你這週新增的 branch 名稱，第一週就是 week1。意思是你要請求把 week1 合併到 master 這條 branch。
3. 可以在下方輸入一些關於這次 pull request 的說明。

#### 提醒
- 在 pull request 之後，如果還想 commit 新的版本，不用再 pull request 一次，只要重複 **[三、提交新版本與同步]** 的步驟，就可以在 pull request 的頁面看到新的 commit。
- 在 commit 分頁，可以看到每次 commit 更動的內容。
- 在進到下一個步驟之前，先到 file changed 分頁做最後檢查，看這週的每個檔案都有順利交上來。

## 五、到學習系統上交作業
複製 pull request 的網址，到學習系統「課程總覽」對應的週次按「繳交作業」貼上網址。記得看完自我檢討再繳交。

## 六、作業改完後
助教改完作業之後，會把這次作業新增的 branch merge 到 master。遠端的 repository 有了更動，本地端也要把更動 pull 回來。所以接著要在本地 terminal 執行以下步驟：

1. `git checkout master` ：切換到本地 master 的分支。
2. `git pull origin master` ：把 origin 最新的 master branch 拉到本地，來更新本地的 master branch。

本地的 master branch在執行以上步驟後，已經有被改完的第一週作業內容，因此可以把當初為了要交第一週作業而新增的 week1 branch 刪掉：`git branch -d week1`。

這樣就完成了一週的交作業流程。

