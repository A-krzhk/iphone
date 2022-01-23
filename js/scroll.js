'use strict';
const scrollFunction = () => {

    const linksHeader = document.querySelectorAll('.header-menu__item a'),
    linksToCharacteristics = document.querySelector('.card-details__description a');
    
    linksHeader.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();

        const id = item.getAttribute('href').substring(1),
                section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
    });

    linksToCharacteristics.addEventListener('click', (e) => {
    const hrefToCharacteristics = linksToCharacteristics.getAttribute('href').substring(1), 
            idCaract = document.getElementById(hrefToCharacteristics);

    e.preventDefault();
    
    idCaract.scrollIntoView({ behavior: "smooth" , block: "start"});
    });

};
scrollFunction();