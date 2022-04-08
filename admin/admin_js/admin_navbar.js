let mobile_link_bars = document.querySelector(".mobile_link_bars")
let mobile_link_xmark = document.querySelector(".mobile_link_xmark")
let navbar = document.querySelector("header .navbar")

mobile_link_bars.addEventListener("click", function(){
    navbar.style.height = "100%"
    mobile_link_xmark.style.display = "inline-block"
    mobile_link_bars.style.display = "none"
    console.log("a")
})

mobile_link_xmark.addEventListener("click", function(){
    navbar.style.height = "0"
    mobile_link_xmark.style.display = "none"
    mobile_link_bars.style.display = "inline-block"
})