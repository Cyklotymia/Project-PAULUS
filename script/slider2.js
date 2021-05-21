

class SlideMaker {
    constructor(slideMom) {
        this.slideMom = slideMom;
       
        this.allSlides = this.slideMom.querySelectorAll(".slide__js")
        
        this.arrowLeft = this.slideMom.querySelector(".arrow-left__js")
        
        this.arrowRight = this.slideMom.querySelector(".arrow-right__js")
        
        this.activeSlide = 0;
        this.arrowService(this.slideMom)
        console.log(this.activeSlide);

    }
    arrowService(mama) {
        mama.addEventListener("click", (e) => {
            this.activeSlide = e.target.closest(".arrow-left__js") === this.arrowLeft ? this.activeSlide -= 1 : this.activeSlide

            this.activeSlide = e.target.closest(".arrow-right__js") === this.arrowRight ? this.activeSlide += 1 : this.activeSlide
            this.activeSlide = this.activeSlide < 0 ? this.allSlides.length - 1 : this.activeSlide
            this.activeSlide = this.activeSlide > this.allSlides.length - 1 ? 0 : this.activeSlide
            this.showSlide(this.allSlides)

        })
    }
    showSlide() {
        this.allSlides.forEach(slide => {
            slide.classList.remove("active")
        })
        this.activeSlide = this.activeSlide < 0 ? this.allSlides.length - 1 : this.activeSlide
        this.activeSlide = this.activeSlide > this.allSlides.length - 1 ? 0 : this.activeSlide
        this.allSlides[this.activeSlide].classList.add("active")
        console.log('zmienilem');
    }


}


class AdvancedSlider extends SlideMaker {
    constructor(slideMom, time) {
        super(slideMom)
        this.timeChanger = time;
        this.touchStart=null;
        this.touchMove=null;
        this.showArrows()
        this.hideArrows()
        
        this.addListeners()
        
        this.changeSlideInTime()
        
    }
    

    intervalFunction(){
        this.changeSlideInTime()
    }


    changeSlideInTime() {
        this.activeSlide += 1
        this.showSlide()

    }

    

    showArrows() {
        
        this.arrowLeft.classList.add("active");
        this.arrowRight.classList.add("active");
    
    
        clearInterval(this.slideChanger)
        
        
    
    }

    hideArrows() {
        this.arrowLeft.classList.remove("active");
        this.arrowRight.classList.remove("active");
        
        console.log(this.slideChanger);
        this.slideChanger = setInterval(this.intervalFunction.bind(this), this.timeChanger)
        
        
        
    }

    handleTouchStart(e){
        this.touchStart = e.touches[0].screenX;
       clearInterval(this.slideChanger);
    }

    handleTouchMove(e){
        this.touchMove = e.touches[0].screenX;
    }

    changeSlideByTouch(){
        this.activeSlide=this.touchStart>this.touchMove? this.activeSlide+=1:this.activeSlide-=1
       console.log(this.activeSlide);
       this.showSlide(this.allSlides,this.activeSlide)
       this.slideChanger = setInterval(this.intervalFunction.bind(this), this.timeChanger)
    }

    addListeners() {
        this.slideMom.addEventListener("mouseenter", this.showArrows.bind(this));
        this.slideMom.addEventListener("mouseleave", this.hideArrows.bind(this));
        this.slideMom.addEventListener('touchstart', this.handleTouchStart.bind(this), false)
        this.slideMom.addEventListener('touchmove', this.handleTouchMove.bind(this), false)
        this.slideMom.addEventListener("touchend", this.changeSlideByTouch.bind(this))
    }
}

let slideMom = document.querySelector(".slideMom__js")
let slideMom2 = document.querySelector(".slideMom__js2")
const slide = new SlideMaker(slideMom)
const slide2 = new AdvancedSlider(slideMom2, 6000)



