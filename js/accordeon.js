const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item');

    chItems.forEach((item, i) => {
        const btn = item.querySelector('.characteristics__title');

        btn.addEventListener('click', () => {
            removeOpen(i);
        });
    });

    function removeOpen(index) {
        chItems.forEach((item, i) => {
            const chList = item.querySelector('.characteristics__description');

            if(index === i) {
                    if (chList.classList.contains('open')) {
                        chList.style.height = '';
                    } else{
                        chList.style.height = chList.scrollHeight + 'px';
                    }
                    chList.classList.toggle('open');               
            } else {
                chList.style.height = '';
                chList.classList.remove('open');

            }   
        });   
    } 
};
accordeon();