// const menuopen = document.getElementById("openMenu")
const menuOpen = document.querySelector("#openMenu")
const menuClose = document.querySelector("#closeMenu")
const navMenu = document.querySelector(".navlinks")


menuOpen.addEventListener("click", function(){
    navMenu.style.right = "0px"
})

menuClose.addEventListener("click", function(){
    navMenu.style.right = "-200px"
})