window.onscroll = function () { scrollFunction() };

const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")

function scrollFunction() {

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    item1.classList.remove('nava')
    item2.classList.remove('nava')
    item3.classList.remove('nava')
    item1.classList.add('navbarShrink')
    item2.classList.add('navbarShrink')
    item3.classList.add('navbarShrink')
    

    document.getElementById("logo").style.width = "20%";
  } else {
    item1.classList.remove('navbarShrink')
    item2.classList.remove('navbarShrink')
    item3.classList.remove('navbarShrink')
    item1.classList.add('nava')
    item2.classList.add('nava')
    item3.classList.add('nava')
    
    document.getElementById("logo").style.width = "30%";
  }
}