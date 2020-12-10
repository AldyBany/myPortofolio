// const closeMenu = 

showMenu = (toggleId, navId, CloseId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        close = document.getElementById(CloseId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.add('show')
        })

    }
    if (close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('show')
        })
    }
}


showMenu('nav-toggle', 'nav-menu', 'close-toggle')

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')


function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// background change

function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 10) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// scrolltop
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)

