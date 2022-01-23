'use strict';
function tabs () {
    const tabs = document.querySelectorAll('.card-detail__change'),
          phoneHeader = document.querySelector('.card-details__title'),
          pricePhone = document.querySelector('.card-details__price'),
          img = document.querySelector('.card__image_item'),
          title = document.querySelector('title'),
          phoneColor = [
            {
                name: 'Graphite',
                storage: '256',
                price: '85000',
                img: 'img/iPhone-graphite.webp' 

            },
            {
                name: 'Silver',
                storage: '128',
                price: '75000',
                img: 'img/iPhone-silver.webp' 

            },
            {
                name: 'Sierra Blue', 
                storage: '512',
                price: '80000',
                img: 'img/iPhone-sierra_blue.webp' 

            }
        ];
    const changeContent = index => {
        phoneHeader.textContent =
            `Смартфон Apple iPhone 13 Pro ${phoneColor[index].storage}GB ${phoneColor[index].name}`;
        pricePhone.textContent = `${phoneColor[index].price}₽`;
        img.setAttribute('src', phoneColor[index].img);
    };
    const changeTitle = index => {
        title.textContent = phoneColor[index].name;
    };
    const clearActive = (indexClickedTab) => {
            tabs.forEach((item, index) => {
                item.classList.remove('active');  
                
                if (index === indexClickedTab) {
                    item.classList.add('active');                
                }
            });
            changeContent(indexClickedTab);
            changeTitle(indexClickedTab);
          };
    
    tabs.forEach((item, i) => {
        item.addEventListener('click', () => {
            clearActive(i);

        });

    });
changeContent(0);
}        
tabs();
 