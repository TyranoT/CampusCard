document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        popup.classList.add('show');
        setTimeout(function () {
            popup.classList.remove('show');
        }, 1000); // 1000 milissegundos = 1 segundos
    });
});
