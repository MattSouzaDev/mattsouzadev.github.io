window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "3px 3px";
    document.getElementById("logo").style.width = "20%";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.width = "30%";
  }
}

const goToTop = document.getElementById("go-to-top");
const goToBottom = document.getElementById("go-to-bottom");
const goToContacts = document.getElementById("go-to-contacts")

goToBottom.addEventListener("click", () => {
    goToTop.scrollIntoView({ behavior: "smooth", block: "end" });
});
goToTop.addEventListener("click", () => {
    goToBottom.scrollIntoView({ behavior: "smooth", block: "start" });
});

