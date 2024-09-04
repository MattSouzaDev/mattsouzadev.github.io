window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("h1-header").style.fontSize = "25px";
    } else {
        document.getElementById("h1-header").style.fontSize = "35px";
    }
}