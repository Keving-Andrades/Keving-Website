document.addEventListener('DOMContentLoaded', () => {
    const ci = document.getElementById('ci');
    const main = document.getElementById('main')

    ci.addEventListener('click', () => {
        copyToClipboard('28050847');

        if (document.querySelector('.alertBox') == null) {
            main.insertAdjacentHTML('beforeend', '<div class="alertBox"></div>');
            const alertBox = document.querySelector('.alertBox');

            alertBox.insertAdjacentHTML('beforeend', '<div class="alertBox__container"></div>')
            const alertBoxContainer = document.querySelector('.alertBox__container');

            alertBoxContainer.insertAdjacentHTML('beforeend', '<svg class="alertBox__container--close" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>')
            alertBoxContainer.insertAdjacentHTML('beforeend', '<div class="alertBox__container--message"></div>');
            alertBoxContainer.insertAdjacentHTML('beforeend', '<div class="alertBox__container--timeoutBar"></div>');
            const alertBoxContainerMessage = document.querySelector('.alertBox__container--message');
            const alertBoxCloseBtn = document.querySelector('.alertBox__container--close');

            alertBoxContainerMessage.insertAdjacentHTML('beforeend', '<svg viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"/></svg>');
            alertBoxContainerMessage.insertAdjacentHTML('beforeend', '<span>Cédula copiada al portapapeles.</span>');

            alertBoxCloseBtn.addEventListener('click', () => {
                closeAlertBox();
            })

            setTimeout(() => {
                alertBox.classList.add('show');
            }, 100);

            setTimeout(() => {
                closeAlertBox();
            }, 7500);

            const closeAlertBox = () => {
                alertBox.classList.remove('show');
                setTimeout(() => {
                    alertBox.remove();
                }, 200);
            };
        };
    });

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(e);
    };
});