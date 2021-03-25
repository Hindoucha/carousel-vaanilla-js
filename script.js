const icon = document.querySelector(".icon")
const sidebar = document.querySelector(".sidebar")
const closeBtn = document.querySelector(".close")

icon.addEventListener("click", ()=>{
    sidebar.style.transform = "translateX(1vw)"
})

closeBtn.addEventListener("click", ()=>{
    sidebar.style.transform = "translateX(25vw)"
})
/*
window.addEventListener("click", function(e)=>{
    if(e.target !== sidebar && e.target.parentNode !== sidebar ){
        sidebar.style.transform = "translateX(25vw)"
    }
})*/

const content = document.querySelector(".content")
const carousel = document.querySelector(".carousel")
const imgs = document.querySelectorAll(".carousel-img")

i=0

setInterval(()=>{
    carousel.style.transition = "0.5s"
    carousel.style.transform = "translateX(-100vw)"
    setTimeout(() => {
        carousel.removeChild(imgs[i%3])
        carousel.appendChild(imgs[i%3])
        i++
        carousel.style.transition = "0s"
        carousel.style.transform = "translateX(0vw)"
    }, 500);
}, 2000)