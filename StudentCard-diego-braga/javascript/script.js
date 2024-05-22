window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var content = document.querySelector('.content');
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        content.classList.add('show'); /* Adiciona a classe 'show' quando a página é rolada */
    } else {
        content.classList.remove('show'); /* Remove a classe 'show' quando a página é rolada para o topo */
    }
}
