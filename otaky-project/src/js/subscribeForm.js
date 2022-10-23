export default function subscribe() {
    let modalSubscribe = document.querySelector('.modal-subscribe');
    let subscribeBtn = document.getElementById("modal-subscribe-btn");
    let subscribeCloseBtn = document.getElementById("modal-subscribe-close-btn");
    const byeMessege = "<div class ='form-subscribe__byeMessege'>Добро пожаловать в комьнити </div> <button id='modal-subscribe-close-btn' class='modal-subscribe__close'>X</button>";
//     const reciveSubModal = `<div class="modal-subscribe__header">
// <div class="modal-subscribe__label">Подпишись на рассылку новостей о нашем проекте</div>
// <button id="modal-subscribe-close-btn" class="modal-subscribe__close">X</button>
// </div>

// <form id="mail_subscribe" class="form-subscribe"  method="POST" >
// <input type="text" name="name" class="form-subscribe__input" placeholder="Укажите имя">
// <input type="text"name="email" class="form-subscribe__input" placeholder="Элетронная почта">
// <input type="submit" class="form-subscribe__submit" value="Подписаться">
// </form>`;
    subscribeCloseBtn.addEventListener('click', () => {
        modalSubscribe.classList.toggle('active');
    });

    subscribeBtn.addEventListener('click',
        () => {
            if (modalSubscribe.matches('.active')) {
                modalSubscribe.classList.toggle('active');
            }
        }
    );


    let subscribeForm = document.getElementById('mail_subscribe');

    // * This subscribe email form

    subscribeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if ((subscribeForm.name.value.length >= 3) && (subscribeForm.email.value.length >= 3)) {
            // let response = await fetch('action/subscribeAction.php', {
            //     method: 'POST',
            //     body: new FormData(subscribeForm)
            // }).then(response => 404).then(result => {
            //     if (result == 200) {
            //         modalSubscribe.innerHTML = byeMessege;
            //         let subscribeCloseBtn = document.getElementById("modal-subscribe-close-btn");
            //         subscribeCloseBtn.addEventListener('click', () => {
            //             modalSubscribe.classList.toggle('active');
            //         });
            //     }
            modalSubscribe.innerHTML = byeMessege;
            let subscribeCloseBtn = document.getElementById("modal-subscribe-close-btn");
            subscribeCloseBtn.addEventListener('click', () => {
                modalSubscribe.classList.toggle('active');
                    });
            alert("post")
        }
        else {
            let header = document.querySelector('.modal-subscribe__label');
            header.textContent = "Error ^ try later";
            header.style.color = 'red';
        }
    });


}