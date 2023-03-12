import TicTacToe from './app/ticTacToeLogic'
import './app/equals'

let t = new TicTacToe()

document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.sec-c__item')
  const cellsArr = [ ...cells ]
  const menu = document.getElementById('menu')
  const thing = document.getElementById('thing')
  const aside = document.getElementById('aside')
  const mode = document.getElementById('mode')

  t.chooseVariant()

  cellsArr.forEach((cell, i) => {
    cell.addEventListener('click', (e) => {
      if (e.target.childElementCount < 1 && e.target.classList[0] === 'sec-c__item') {
        t.toggle(cell, i)
      }
    })
  })

  menu.addEventListener('mouseover', () => {
    if (thing.classList[1] !== 'menu-container__menu--active')
      thing.classList.toggle('menu-container__menu--hover')
  })

  menu.addEventListener('mouseleave', () => {
    if (thing.classList[1] !== 'menu-container__menu--active')
      thing.classList.toggle('menu-container__menu--hover')
  })

  menu.addEventListener('click', () => {
    thing.classList.toggle('menu-container__menu--active')
    thing.classList.remove('menu-container__menu--hover')
    aside.style.display = 'block'

    if (thing.classList[1] === 'menu-container__menu--active') {
      aside.style.display = 'block'
    } else {
      setTimeout(() => {
        aside.style.display = 'none'
      }, 500)
    }

    setTimeout(() => {
      aside.classList.toggle('aside--show')
    }, 200)
  })

  mode.addEventListener('click', (e) => {
    t.selectMode(e.target.dataset.id)

    thing.classList.toggle('menu-container__menu--active')

    setTimeout(() => {
      aside.classList.toggle('aside--show')
    }, 200)

    setTimeout(() => {
      aside.style.display = 'none'
    }, 500)
  })
})
