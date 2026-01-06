let imgSlider = document.querySelectorAll('.slider-container .slider-box');
let btnProx = document.querySelector('#proxima');
let btnAnter = document.querySelector('#anterior');
let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav')

let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener('click', ()=>{
    imgAtiva++;
    if(imgAtiva >= contadorImg){
        imgAtiva = 0;
    }
    mortrarSlider();
})

btnAnter.addEventListener('click', ()=>{
    imgAtiva--;
    if(imgAtiva < 0){
        imgAtiva = contadorImg - 1;
    }
    mortrarSlider();
})

function mortrarSlider (){
    let antigaImg = document.querySelector('.slider-container .slider-box.ativo');
    let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo');

    antigaImg.classList.remove('ativo');
    antigoBtnNav.classList.remove('ativo');

    imgSlider[imgAtiva].classList.add('ativo')
    btnNav[imgAtiva].classList.add('ativo')
}

btnNav.forEach((btn, indice)=>{
    btn.addEventListener('Click', ()=>{
        imgAtiva = indice;
        mortrarSlider();
    })
})

const slides = document.querySelectorAll(".slider-box");
const btns = document.querySelectorAll(".btn-nav");
const btnAnterior = document.getElementById("anterior");
const btnProxima = document.getElementById("proxima");

let index = 0;

function mostrarSlide(i) {
    // remove ativo de tudo
    slides.forEach(slide => slide.classList.remove("ativo"));
    btns.forEach(btn => btn.classList.remove("ativo"));

    // adiciona no atual
    slides[i].classList.add("ativo");
    btns[i].classList.add("ativo");
}

// botão próximo
btnProxima.addEventListener("click", () => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    mostrarSlide(index);
});

// botão anterior
btnAnterior.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    mostrarSlide(index);
});

// clique nas bolinhas
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
    });
});

// autoplay (opcional)
setInterval(() => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    mostrarSlide(index);
}, 6000);