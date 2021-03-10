window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (!document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").style.top = "0vw";

    } else {
        let barDiv = document.getElementById("navbar");
        barDiv.style.top = '0vw';

    }
}
