const faixaCarrossel = document.querySelector(".faixa-carrossel");
const cartoes = document.querySelectorAll(".cartao");

const botaoAnterior = document.querySelector(".anterior");
const botaoProximo = document.querySelector(".proximo");

let posicao = 0;

const larguraCartao = 290;
const cartoesVisiveis = 3;

function moverProximo() {
    const limite = (cartoes.length - cartoesVisiveis) * larguraCartao;

    if (Math.abs(posicao) >= limite) {
        posicao = 0;
    } else {
        posicao -= larguraCartao;
    }

    faixaCarrossel.style.transform = `translateX(${posicao}px)`;
}

function moverAnterior() {
    const limite = (cartoes.length - cartoesVisiveis) * larguraCartao;

    if (posicao >= 0) {
        posicao = -limite;
    } else {
        posicao += larguraCartao;
    }

    faixaCarrossel.style.transform = `translateX(${posicao}px)`;
}

botaoProximo.addEventListener("click", moverProximo);
botaoAnterior.addEventListener("click", moverAnterior);

/* AUTO PLAY */
let autoPlay = setInterval(moverProximo, 3000);

const carrossel = document.querySelector(".carrossel-produtos");

carrossel.addEventListener("mouseenter", () => {
    clearInterval(autoPlay);
});

carrossel.addEventListener("mouseleave", () => {
    autoPlay = setInterval(moverProximo, 3000);
});