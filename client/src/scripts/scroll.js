export default function scroll() {

    //sets element to be manipulated as #backToTop
    var myID = document.getElementById("backToTop");

    //shows button if not at top of page
    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 100) {
            myID.className = "backToTop show"
        } else {
            myID.className = "backToTop hide"
        }
    };

    //listens for scroll event to trigger function
    window.addEventListener("scroll", myScrollFunc);
};