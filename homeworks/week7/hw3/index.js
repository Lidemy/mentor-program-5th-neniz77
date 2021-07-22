// 處理上方新增任務欄位
document.querySelector('.type-task').addEventListener('keypress', (e) => {
  if (e.code === 'Enter' && e.target.value) {
    const taskText = e.target.value
    e.target.value = null
    const taskItem = document.createElement('li')
    taskItem.classList.add('task')
    taskItem.innerHTML = `
      <label>
          <input class="task__check" type="checkbox" />
          <span class="task__text">${escapeHtml(taskText)}</span>
      </label>
      <input class="task__delete" type="button" />`
    document.querySelector('.tasks').prepend(taskItem)
  }
})
// 處理下方任務管理欄位
document.querySelector('.tasks').addEventListener('click', (e) => {
  // 刪除 task
  const { target } = e
  if (target.classList.contains('task__delete')) {
    target.parentNode.remove()
    return
  }
  // 把已勾選的 task 移到最後面
  if (target.classList.contains('task__check')) {
    if (target.checked) {
      const done = target.closest('.task')
      document.querySelector('.tasks').removeChild(done)
      document.querySelector('.tasks').appendChild(done)
    }
  }
})
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
