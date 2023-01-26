/*
    OBJETIVO 1 --- Quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer;
    OBJETIVO 2 --- Quando o usuário clicar no X devemos fechar a modal;

    PASSOS OBJETIVO 1:
    Passo 1 --- Dar um jeito de pegar o elemento que representa o botão na tela usando o js;
    Passo 2 --- Dar um jeito de identificar quando o usuário clicar o botão;
    Passo 3 --- Dar um jeito de pegar o elemento da modal no js;
    Passo 4 --- Abrir o modal na tela;

    PASSOS OBJETIVO 2:
    Passo 1 --- Dar um jeito de pegar o elemento de fechar o modal usando o js;
    Passo 2 --- Dar um jeito de identificar quando o usuário clicar no X;
    Passo 3 --- Fechar a modal.
*/



const botaoTrailer = document.querySelector(".botao_trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar_modal");
const video = document.querySelector("#video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

  