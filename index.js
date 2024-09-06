window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

const goToTop = document.getElementById("go-to-top");
const goToBottom = document.getElementById("go-to-bottom");

goToBottom.addEventListener("click", () => {
    goToTop.scrollIntoView({ behavior: "smooth", block: "end" });
});
goToTop.addEventListener("click", () => {
    goToBottom.scrollIntoView({ behavior: "smooth", block: "start" });
});