document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        
        try {

            await new Promise(resolve => setTimeout(resolve, 500)); // Simulando uma espera de 500ms
 
            popupMessage.textContent = "Mensagem enviada com sucesso!";
            form.reset();

            popup.classList.add('show');
            setTimeout(function () {
                popup.classList.remove('show');
            }, 1000); 
        } catch (error) {
            popupMessage.textContent = "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.";
            popup.classList.add('show');
            setTimeout(function () {
                popup.classList.remove('show');
            }, 1000);
        }
    });
});
