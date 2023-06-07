// jquery for the hover effect
$(document).ready(function () {
    $("#lea").hover(function () {
        $(".oo").css({
            marginLeft: "20px",
            transition: "all 0.9s",
        });
    });
    $("#lea").mouseout(function () {
        $(".oo").css({
            marginLeft: "0px",
            transition: "all 0.9s",
        });
    });
    $("#leb").hover(function () {
        $(".op").css({
            marginLeft: "20px",
            transition: "all 0.9s",
        });
    });
    $("#leb").mouseout(function () {
        $(".op").css({
            marginLeft: "0px",
            transition: "all 0.9s",
        });
    });
    $("#lec").hover(function () {
        $(".or").css({
            marginLeft: "20px",
            transition: "all 0.9s",
        });
    });
    $("#lec").mouseout(function () {
        $(".or").css({
            marginLeft: "0px",
            transition: "all 0.9s",
        });
    });
});

// javascript for  the navbar

var lastscroll = 0;

function tony() {
    var scrolltop = window.pageYOffset
    if (scrolltop > lastscroll) {
        document.getElementById("nav").style.position = "initial"
        document.getElementById("nav").style.backgroundColor = "transparent"
        document.getElementById("text-white").style.color = "white"
        document.getElementById("text-white1").style.color = "white"
        document.getElementById("text-white2").style.color = "white"
        document.getElementById("text-white3").style.color = "white"
        document.getElementById("text-white4").style.color = "white"
        document.getElementById("text-white5").style.color = "white"
    }
    else if (scrolltop == 0) {
        document.getElementById("nav").style.position = "initial"
        document.getElementById("nav").style.backgroundColor = "transparent"
        document.getElementById("text-white").style.color = "white"
        document.getElementById("text-white1").style.color = "white"
        document.getElementById("text-white2").style.color = "white"
        document.getElementById("text-white3").style.color = "white"
        document.getElementById("text-white4").style.color = "white"
        document.getElementById("text-white5").style.color = "white"
    }
    else {
        document.getElementById("nav").style.position = "fixed"
        document.getElementById("nav").style.backgroundColor = "white"
        document.getElementById("text-white").style.color = "#1a72a5"
        document.getElementById("text-white1").style.color = "#1a72a5"
        document.getElementById("text-white2").style.color = "#1a72a5"
        document.getElementById("text-white3").style.color = "#1a72a5"
        document.getElementById("text-white4").style.color = "#1a72a5"
        document.getElementById("text-white5").style.color = "#1a72a5"
        }
    lastscroll = scrolltop
}
