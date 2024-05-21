// Obtenha o modal
var modal = document.getElementById("formModal");

// Obtenha os botões que abrem o modal
var btn = document.getElementById("openForm");
var btn2 = document.getElementById("openForm2");
var btn3 = document.getElementById("openForm3");

var btnContact1 = document.getElementById("openFormContact1");
var btnContact2 = document.getElementById("openFormContact2");
var btnContact3 = document.getElementById("openFormContact3");
var btnContact4 = document.getElementById("openFormContact4");
// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abra o modal 
btn.onclick = function(event) {
    event.preventDefault();
    openModal();
}

btn2.onclick = function(event) {
    event.preventDefault();
    openModal();
}

btn3.onclick = function(event) {
    event.preventDefault();
    openModal();
}

btnContact1.onclick = function(event) {
    event.preventDefault();
    openModal();
}

btnContact2.onclick = function(event) {
    event.preventDefault();
    openModal();
}

btnContact3.onclick = function(event) {
    event.preventDefault();
    openModal();
}

btnContact4.onclick = function(event) {
    event.preventDefault();
    openModal();
}

// Quando o usuário clicar em <span> (x), feche o modal com animação
span.onclick = function() {
    closeModalWithAnimation();
}

// Quando o usuário clicar fora do modal, feche-o com animação
window.onclick = function(event) {
    if (event.target == modal) {
        closeModalWithAnimation();
    }
}

function openModal() {
    modal.style.display = "flex";
}

function closeModalWithAnimation() {
    modal.style.animationName = 'zoomOutModal'; // Aplica a animação de saída
    modal.style.animationDuration = '0.5s'; // Define a duração da animação
    setTimeout(function() {
        modal.style.display = 'none'; // Oculta o modal após a animação
        // Remover a animação após fechar o modal para não interferir na próxima abertura
        modal.style.removeProperty('animation-name');
    }, 500); // Tempo igual à duração da animação em milissegundos
}
