

window.onscroll = function () { scrollFunction() };

const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")
const logo = document.getElementById("logo")

function scrollFunction() {

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    item1.classList.remove('nava')
    item2.classList.remove('nava')
    item3.classList.remove('nava')
    item1.classList.add('navbarShrink')
    item2.classList.add('navbarShrink')
    item3.classList.add('navbarShrink')
    logo.classList.remove('logo')
    logo.classList.add('logo1')
    
  } else {
    item1.classList.remove('navbarShrink')
    item2.classList.remove('navbarShrink')
    item3.classList.remove('navbarShrink')
    item1.classList.add('nava')
    item2.classList.add('nava')
    item3.classList.add('nava')
    logo.classList.remove('logo1')
    logo.classList.add('logo')
  }
}