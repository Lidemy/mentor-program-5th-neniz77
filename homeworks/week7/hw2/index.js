const element = document.querySelector('.faqs')
element.addEventListener('click', (e) => {
  const items = document.querySelectorAll('.faq__item')
  const clicked = e.target.closest('.faq__item')
  console.log(clicked)
  if (!clicked.classList.contains('hide-answer')) {
    clicked.classList.add('hide-answer')
  } else {
    for (const item of items) {
      item.classList.add('hide-answer')
    }
    clicked.classList.remove('hide-answer')
  }
})
