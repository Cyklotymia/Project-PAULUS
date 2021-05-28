function startAddAnimations() {

    const sectionMove = (sectionName) => {
        
        let className=sectionName?`.${sectionName}`:null
        
        const section=document.querySelector(className)
       

        let sectionStart=section?section.offsetTop:null
        
        
        bottomOfpage = window.scrollY + window.innerHeight


        if (sectionStart && bottomOfpage >= sectionStart ) {
            
            section.classList.add("active")
        }

        

    };
    sectionMove('gallery')
    sectionMove('offer');
    document.addEventListener("scroll", ()=>{
        sectionMove('offer');
        sectionMove('procces');
        sectionMove('gallery');
    })
}