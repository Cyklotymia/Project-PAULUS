function menuStart(){
const footer=document.querySelector(".footer")

footer.addEventListener("click", (e)=>{
    e.target.closest(".menu__js").classList.toggle("active")
})
}