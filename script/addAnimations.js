function startAddAnimations() {


    let offerSectionStart;
    let proccesSectionStart;
    let gallerySectionStart;





    const SectionMove = () => {
        
        offerSectionStart=offerSection?offerSection.offsetTop:null
        proccesSectionStart=proccesSection?proccesSection.offsetTop:null
        gallerySectionStart=gallerySection?gallerySection.offsetTop:null
        
        bottomOfpage = window.scrollY + window.innerHeight


        if (offerSectionStart && bottomOfpage >= offerSectionStart ) {
            
            offerSection.classList.add("active")
        }

        if ( proccesSectionStart && bottomOfpage >= proccesSectionStart ) {
            
            proccesSection.classList.add("active")
        }
        if (gallerySectionStart && bottomOfpage >= gallerySectionStart ) {
            
            gallerySection.classList.add("active")
        }

    };
    document.addEventListener("scroll", SectionMove)
}