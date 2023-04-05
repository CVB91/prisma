const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let interval = null

document.querySelector('h1').onmouseover = (event) => {
  let iteration = 0

  clearInterval(interval)

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index]
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join('')

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval)
    }

    iteration += 1 / 4
  }, 30)
}


const h1Container = document.querySelector('.h1-container')
const info = document.querySelector('.info')

h1Container.addEventListener('click', () => {
  info.classList.toggle('active')
})

