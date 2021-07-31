document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  const elements = document.querySelectorAll('.input-block--required')
  const returnData = {}
  let hasError = false
  for (const element of elements) {
    let isValid = false

    // 選到各種類型的 input
    const input = element.querySelector('input[type=text]')
    const email = element.querySelector('input[type=email]')
    const tel = element.querySelector('input[type=tel]')
    const radios = element.querySelectorAll('input[type=radio]')

    if (input) {
      if (input.value) {
        returnData[input.name] = input.value
        isValid = true
      }
    } else if (email) {
      if (email.value) {
        returnData[email.name] = email.value
        isValid = true
      }
    } else if (tel) {
      if (tel.value) {
        returnData[tel.name] = tel.value
        isValid = true
      }
    } else if (radios.length) {
      for (const radio of radios) {
        if (radio.checked) {
          isValid = true
          returnData[radio.name] = radio.parentNode.innerText
          break
        }
      }
    } else continue
    if (!isValid) {
      element.classList.remove('hide-error')
      hasError = true
    } else {
      element.classList.add('hide-error')
    }
  }
  if (!hasError) {
    alert(JSON.stringify(returnData))
  }
})
