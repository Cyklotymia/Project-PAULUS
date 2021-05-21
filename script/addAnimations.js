function startAddAnimations() {


    let offerSectionStart;
    let proccesSectionStart;





    const SectionMove = () => {
        offerSectionStart = offerSection.offsetTop;
        proccesSectionStart=proccesSection.offsetTop;
        bottomOfpage = window.scrollY + window.innerHeight


        if (bottomOfpage >= offerSectionStart) {
            offerSection.classList.add("active")
        }

        if (bottomOfpage >= proccesSectionStart) {
            proccesSection.classList.add("active")
        }

    };
    document.addEventListener("scroll", SectionMove)
}