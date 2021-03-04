// preloader script.  from class activities 19.3


function fade () {
    $(".caseStudyTop").fadeOut("slow");
}

setTimeout (fade, 1800);


// img rollOver script.  from: https://stackoverflow.com/questions/540349/change-the-image-source-on-rollover-using-jquery

$(document).ready(function() {      
     $("img", this).hover(swapImageIn, swapImageOut);

    function swapImageIn(e) {
        this.src = this.src.replace("_on", "_hover");
    }
    function swapImageOut (e) {
        this.src = this.src.replace("_hover", "_on");
    }
});