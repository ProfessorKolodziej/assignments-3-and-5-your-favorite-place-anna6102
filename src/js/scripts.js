// script.js

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("scrollButton");

    button.addEventListener("click", function () {
        document.getElementById("travelTipsSection").scrollIntoView({
            behavior: 'smooth'
        });
    });
});
