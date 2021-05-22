function makeMoveLogos() {
    

const sectionLogos =document.querySelector(".sliderLogos")
const container = document.querySelector(".sliderLogos-container")

const changeWidth = function () {
    container.style.width = `calc(${window.screen.width}px + 20%)`
    
}
window.addEventListener("resize", changeWidth)


// container.style.width=`${window.screen.width}px` 
changeWidth()




let changemargin = setInterval(() => {
    sectionLogos.style.marginLeft="-20%"
    sectionLogos.style.transition="0.4s linear"
}, 4600)

let changeChild=setInterval(() => {
    clearInterval(changemargin)
    let sliderItem = container.querySelector(".sliderLogos-item")
   
    container.appendChild(sliderItem)
    sectionLogos.style.marginLeft="0"
    sectionLogos.style.transition="none"
    changemargin = setInterval(() => {
        sectionLogos.style.marginLeft="-20%"
        sectionLogos.style.transition="0.4s linear"
        
    }, 4600)
}, 5000)

}