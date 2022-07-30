/*for (const icon of toggleMenu) {
  icon.addEventListener(`click`, function () {
    nav.classList.toggle(`show`)
  })
}
*/

/* open and close MENU */
const nav = document.querySelector(`#header nav`)
const toggleMenu = document.querySelectorAll(`nav .toggleMenu`)
const menu = document.querySelectorAll(`nav ul li a`)

for (const icon of toggleMenu) {
  icon.onclick = function () {
    nav.classList.toggle(`show`)
  }
}

for (const item of menu) {
  item.onclick = function () {
    nav.classList.remove(`show`)
  }
}

/* active DARKMODE */
const body = document.querySelector('body')
const toggleDark = document.getElementsByClassName('toggleDark')
console.log(toggleDark)

for (const icon of toggleDark) {
  icon.onclick = function () {
    nav.classList.toggle('toggle')
    body.classList.toggle('active')
  }
}

/* shadow ON HEADER */

function shadowHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add(`scroll`)
  } else {
    header.classList.remove(`scroll`)
  }
}

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContents => {
      tabContents.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})

/* TESTIMONIALS CAROUSEL SLIDER SWIPER */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: `.swiper-pagination`
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

var swiperTwo = new Swiper('.mySwiper', {
  effect: 'cards',
  grabCursor: true
})

/* WHATSAPP FLOAT  */
const whatsappButton = document.querySelector(`#whatsapp-button`)
const iconClose = document.querySelectorAll(`i.icon-close`)
let click = false

iconClose[0].onclick = function () {
  whatsappButton.classList.remove('show')
  click = true
}

function check() {
  if (click == false && window.scrollY >= 200) {
    whatsappButton.classList.add(`show`)
  }
}

/* scroll reveal */
const scrollReveal = ScrollReveal({
  origin: `top`,
  distance: `30px`,
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home.text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials
   #contact .text, #contact .links,
   #footer .brand, #footer .social
   `
)

/* button back to top */
function backToTop() {
  const backToTopButton = document.querySelector(`.back-to-top`)

  if (window.scrollY >= 560) {
    backToTopButton.classList.add(`show`)
  } else {
    backToTopButton.classList.remove(`show`)
  }
}

/* light on menu active */
const sections = document.querySelectorAll(`main section[id]`)
function lightOnMenuActive() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionID = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*=` + sectionID + `]`)
        .classList.add(`active`)
    } else {
      document
        .querySelector(`nav ul li a[href*=` + sectionID + `]`)
        .classList.remove(`active`)
    }
  }
}

window.onscroll = function () {
  shadowHeaderWhenScroll()
  backToTop()
  check()
  lightOnMenuActive()
}
