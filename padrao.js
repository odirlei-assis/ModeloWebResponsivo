const aside = document.getElementsByTagName("aside")[0];
const nav = document.getElementsByTagName("nav")[0];
const logo = document.querySelector(".aside_container > img");
const logout = document.querySelector(".botao_sair");
const setaAbreFecha = document.querySelector(".botao_menu_retratil");
const sombra =  document.querySelector(".sombra");

function abreFechaMenu() {
    setaAbreFecha.classList.toggle("botao_menu_retratil_min");
    aside.classList.toggle("aside_min");
    nav.classList.toggle("aside_nav_min");
    logo.classList.toggle("aside_logo_min");
    logout.classList.toggle("botao_sair-min");
    
    if (window.innerWidth > 768) {
        document.getElementsByTagName("main")[0].classList.toggle("main-min");
    }
    
    if (window.innerWidth <= 768 && document.querySelector(".aside_min") == null) {
        sombra.classList.add("movimento_sombra");
    } else {
        sombra.classList.remove("movimento_sombra");
    }
}

function posicaoResponsiva() {
    if (window.innerWidth <= 768) {
        aside.classList.add("aside_min");
        nav.classList.add("aside_nav_min");
        logo.classList.add("aside_logo_min");
        logout.classList.add("botao_sair-min");
        setaAbreFecha.classList.add("botao_menu_retratil_min");
    }else{
        aside.classList.remove("aside_min");
        nav.classList.remove("aside_nav_min");
        logo.classList.remove("aside_logo_min");
        logout.classList.remove("botao_sair-min");
        setaAbreFecha.classList.remove("botao_menu_retratil_min");
    }    
    sombra.classList.remove("movimento_sombra");
}

window.onresize = posicaoResponsiva;
window.onload = posicaoResponsiva;