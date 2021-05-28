function startAddAnimations() {
    let bottomOfPage;
    const sectionMove = (sectionName) => {
        
        let className = sectionName ? `.${sectionName}` : null;
        const section = document.querySelectorAll(className);

        section.forEach(section => {
            let sectionStart = section ? section.offsetTop : null;
            bottomOfPage = window.scrollY + window.innerHeight;

            if (sectionStart && bottomOfPage >= sectionStart) {

                section.classList.add("active");
            };
        })
    };
    sectionMove('js__addAnimations');
    document.addEventListener("scroll", () => {
        sectionMove('js__addAnimations');

    });
};