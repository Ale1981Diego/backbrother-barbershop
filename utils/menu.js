import { html, render } from "./lit.js";


export default function () {
    /* movimiento menu hamburguesa - despliega menu lateral */
    
    let menu = () => {
        let cover = document.querySelector('.cover');
        let nav = document.querySelector('#nav');
        let btn = document.querySelector('.hamburger');
        btn.classList.toggle('active');
        nav.classList.toggle('visible');
        cover.classList.toggle('cover-active');
    };

    let cerrarMenu = () => {
        let cover = document.querySelector('.cover');
        let nav = document.querySelector('#nav');
        let btn = document.querySelector('.hamburger');
        btn.classList.toggle('active');
        nav.classList.toggle('visible');
        cover.classList.toggle('cover-active');
    };

    let sacarTurno = () => {window.open('https://api.whatsapp.com/send?phone=541164358797&text=Hola chicos, quería solicitar el turno de las hs. Muchas gracias!')}

    return html `
    <div class="header" id="header">
        <img src="imagenes/logo-marca(sf).png" alt="logo de la barberia" class="img-logo" id="img-log">
        <nav class="nav" id="nav">
            <ul @click=${cerrarMenu}>
                <li class="link link-home"><a href="index.html" title="ir a inicio">Inicio</a></li>
                <li class="link link-home"><a href="#about" title="ir a nosotros">Nosotros</a></li>
                <li class="link link-services"><a href="#servicios" title="ir a servicios">Servicios</a></li>
                <li class="link link-image"><a href="#imagenes" title="ir a fotos">Imagenes</a></li>
                <li class="link link-contact"><a href="#contacto" title="ir a contactos">Contactos</a></li>
                <li class="link link-turn"><a href="#" class="turnos" title="ir a sacar turnos" @click=${sacarTurno}>Turnos<i class="fa-brands fa-whatsapp"></i></a></li>
            </ul>
        </nav>
        <div class="menu-hamburger" id="menu-hamburger">
            <!-- Menú hamburguesa - dispositivos moviles -->
            <button type="button" class="hamburger" @click=${menu}>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
        </div>
    </div>
    `;
};
