var link = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form");
var date_arrival = document.querySelector(".date-arrival");

var adult_plus_btn =document.querySelector(".adults-block .icon-plus");
var adult_mines_btn =document.querySelector(".adults-block .icon-minus");
var children_plus_btn =document.querySelector(".childrens-block .icon-plus");
var children_mines_btn =document.querySelector(".childrens-block .icon-minus");
            
link.addEventListener("click", function (event) {
    event.preventDefault();
    if (popup.classList.contains("search-form-show")) {
        popup.classList.remove("search-form-show");
    } else {
       popup.classList.add("search-form-show");
    }
});
            
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27 && popup.classList.contains("search-form-show")) {
        popup.classList.remove("search-form-show");
    }
});

adult_plus_btn.addEventListener("click", function (event) {
    var adult_value = document.querySelector("#adults").getAttribute("value");
    adult_value++;
    document.querySelector("#adults").setAttribute("value", adult_value);
});

adult_mines_btn.addEventListener("click", function (event) {
    var adult_value = document.querySelector("#adults").getAttribute("value");
    if (adult_value > 0) {
        adult_value--;
    }
    document.querySelector("#adults").setAttribute("value", adult_value);
});

children_plus_btn.addEventListener("click", function (event) {
    var adult_value = document.querySelector("#childrens").getAttribute("value");
    adult_value++;
    document.querySelector("#childrens").setAttribute("value", adult_value);
});

children_mines_btn.addEventListener("click", function (event) {
    var adult_value = document.querySelector("#childrens").getAttribute("value");
    if (adult_value > 0) {
        adult_value--;
    }
    document.querySelector("#childrens").setAttribute("value", adult_value);
});
