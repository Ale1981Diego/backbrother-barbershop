import {html, render} from '../utils/lit.js';
import menu from '../utils/menu.js';
import footer from '../utils/footer.js'

export default function () {

    window.addEventListener('resize', ()=> {
        let divLlamada = document.querySelector('.llamada');
        let divScroll = document.querySelector('.scroll-up');
        if (window.innerWidth >= 768) 
        {
            divLlamada.classList.add('display-none');
            divScroll.classList.remove('display-none');
        } 
        else if (window.innerWidth < 768)
        {
            divLlamada.classList.remove('display-none');
            divScroll.classList.add('display-none');
        }
    });

    /* función llamada - directa */
    let llamada = () => {
        window.location.href = 'tel:+541164358797';
    }

    /* función scroll up */
    let volverInicio = () => {
        document.body.scrollTo ({
            top:0,
        })

        document.documentElement.scrollTo({
            top:0,
        })
    }


    return html `
        ${menu()}
        <div id="body">
            <div class="div-img-fondo" id="div-img-fondo">
                <img src="imagenes/barberia.jpg" title="foto barberia" id="foto-background">
                <img src="imagenes/logopreview.png" id="foto-cover" alt="logo de la barberia">
            </div>
            <div id="about">
                <h2>Nosotros</h2>
                <span class="line"></span>
                <div id="about-foto-img">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cupiditate, perferendis quidem delectus doloremque vel ipsum dicta asperiores quia libero nisi quis voluptatum aperiam. At tempora beatae cupiditate. Recusandae, tempore? Doloribus architecto reiciendis nostrum optio, ab aliquam. Consequatur dignissimos ex odio enim cupiditate ab iure, quas eum explicabo dolorem praesentium pariatur neque amet labore culpa reiciendis, animi architecto quaerat excepturi!</p>
                    <img src="imagenes/foto-fondo.jpg" alt="imagen del interior de la barberia">
                </div>
            </div>
            <div class="servicios" id="servicios">
                <h2>Servicios</h2>
                <span class="line"></span>
                <div class="servicios-flex">
                    <div class="servicio-precios">
                        <div>
                            <h3>Corte de cabello</h3>
                            <img src="imagenes/cabello(sf).png" alt="icono corte de cabello">
                        </div>
                        <div>
                            <p>$ 00,00</p>
                        </div>
                    </div>
                    <div class="servicio-precios">
                        <div>
                            <h3>Corte de barba</h3>
                            <img src="imagenes/barba(sf).png" alt="icono corte de barba">
                        </div>
                        <div>
                            <p>$ 00,00</p>
                        </div>
                    </div>
                    <div class="servicio-precios">
                        <div>
                            <h3>Corte de Cabello+Barba</h3>
                            <img src="imagenes/cabello+barba(sf).png" alt="icono corte de cabello mas barba">
                        </div>
                        <div>
                            <p>$ 00,00</p>
                        </div>
                    </div>
                    <div class="servicio-precios">
                        <div class="ninio">
                            <h3>Corte de cabello para niños</h3>
                            <img src="imagenes/ninio(sf).png" class="img-ninio" alt="icono corte de cabello para niños">
                        </div>
                        <div>
                            <p>$ 00,00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="imagenes" id="imagenes">
                <h2>Imagenes</h2>
                <span class="line"></span>
                <div id="contenedor-img">
                    <div class="carousel-item">
                        <img src="imagenes/carrusel1.png" class="d-block w-100" alt="foto de la peluqueria">
                    </div>
                    <div class="carousel-item">
                        <img src="imagenes/carrusel2.png" class="d-block w-100" alt="corte de cabello uno">
                    </div>
                    <div class="carousel-item">
                        <img src="imagenes/carrusel3.png" class="d-block w-100" alt="corte de cabello dos">
                    </div>
                </div>
            </div>
            <div class="llamada" id="llamada" @click=${llamada}>
                <i class="fa-solid fa-phone"></i>
            </div>
            <div class="scroll-up" id="scroll-up" @click=${volverInicio}>
                <i class="fa-solid fa-arrow-up"></i>
            </div>
        </div>
        ${footer()}
    `;
};

