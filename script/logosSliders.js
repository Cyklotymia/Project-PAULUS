function makeMoveLogos() {
    

const sectionLogos =document.querySelector(".sliderLogos")
const container = sectionLogos.querySelector(".sliderLogos-container")

const changeWidth = function () {
    container.style.width = `calc(${window.screen.width}px + 20%)`
    
}
window.addEventListener("resize", changeWidth)


// container.style.width=`${window.screen.width}px` 
changeWidth()




let changemargin = setInterval(() => {
     container.style.transition="0.4s linear"
    container.style.marginLeft="-20%"
   
}, 4600)

let changeChild=setInterval(() => {
    clearInterval(changemargin)
    let sliderItem = container.querySelector(".sliderLogos-item")
   
    container.appendChild(sliderItem)
    container.style.marginLeft="0"
    container.style.transition="none"
    changemargin = setInterval(() => {
        container.style.marginLeft="-20%"
        container.style.transition="0.4s linear"
        
    }, 4600)
}, 5000)

}