const sendForm = () => {
    const btnOpen = document.querySelector('.card-details__button_delivery'),
          modal = document.querySelector('.modal'),
          closeModal = modal.querySelector('.modal__close'),
          modalTitle = modal.querySelector('.modal__title'),
          cardDetailsTitle = document.querySelector('.card-details__title'),
          modalForm = modal.querySelector('form');
        

    btnOpen.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = cardDetailsTitle.textContent;
    });
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const labels = modal.querySelectorAll('.modal__label');
        const sendMessage = {};
        labels.forEach(label => {
            const span = label.querySelector('span'),
                  input = label.querySelector('input');
            
            sendMessage[span.textContent] = input.value;
        e.target.reset();
        modal.style.display = 'none';   
        });
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then(() => {
                console.log('Отправлено');
            });
        });
};
sendForm();