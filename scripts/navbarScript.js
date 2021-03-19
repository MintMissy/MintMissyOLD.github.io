window.onscroll = function () {
    scrollFunction()
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}