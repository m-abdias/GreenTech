let show = false

const linkItems = document.querySelectorAll('.sidebar li a')

const body = document.querySelector('body')
const sidebar = body.querySelector('aside')
const toggle = body.querySelector('.toggle')
const modeSwitch = body.querySelector('.toggle-switch')
const modeText = body.querySelector('.mode-text')
const logo = document.querySelector('.header__logo-box')

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close', show)
  setTimeout(() => {
    show
      ? (logo.innerHTML = `<span class="image"> LG </span>`)
      : (logo.innerHTML = `<span class="image"> LOGOTIPO </span>`)
    show = !show
  }, 100)
})

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark')

  if (body.classList.contains('dark')) {
    modeText.innerText = 'Dark mode'
  } else {
    modeText.innerText = 'Light mode'
  }
})

