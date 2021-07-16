$(document).scroll(function() {

    myID = document.getElementById("backToTop");

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 100) {
            myID.className = "backToTop show"
        } else {
            myID.className = "backToTop hide"
        }
    };

    window.addEventListener("scroll", myScrollFunc);
});
