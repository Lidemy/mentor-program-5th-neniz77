## 交作業流程
## ㄧ、設定作業 repo
### 1-1 產生 repo
用 GitHub Classroom 的連結來自動產生一個名稱叫做 Lidemy/mentor-program-5th-(你的GitHub帳號) 的 repository，這個就是之後用來交作業的地方。

### 1-2 把這個遠端資料庫 clone 到自己的電腦
在 repo 頁面「 下載 code」的圖示點開，複製資料庫連結網址。接著在你電腦找到一個想放這個資料庫的資料夾，在 terminal  切換到那個資料夾，輸入 `git clone 網址`。

## 二、寫作業
寫完作業後，接著要把在本機端的更動 push 到遠端的 repository。
根據 GitHub flow 工程師協作資料庫的規範，每當想要增加或修改資料庫時，要先新增一個 branch，pull request 讓大家討論、修正這個更動之後，最後再 merge 回去原本的 master branch。每週的交作業，也會依照這個流程來進行。

### 2-1 新增一個 branch
之後每週交作業，就是一週開一個新的 branch 來提交這個更動。

1. 在 terminal 輸入 `git branch week1`產生一個新的叫做 week1 的 branch
2. `git checkout week1` 來切換到 week1 的這個 branch

也可以直接 `git checkout -b week1` 來合併這兩個步驟，同時開一個新的 branch 又切換到新的 branch。
 
### 2-2 寫作業
你的電腦裡應該會有 mentor-program-5th-(你的GitHub帳號) 這個資料夾，點開 homeworks /week1 資料夾，可以看到第一週的作業檔案，直接點開編輯即可。
####  注意：
1. 不要自己開新的檔案。
2. 要確認是在切換到 week1 這條 branch 的狀態下，對檔案進行編輯。

## 三、交作業 


