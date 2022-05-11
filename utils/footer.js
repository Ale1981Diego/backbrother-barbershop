import { html, render } from "./lit.js";

export default function () {
    const face = () => {
        window.open('https://www.facebook.com');
    };

    const insta = () => {
        window.open('https://www.instagram.com');
    };

    return html `
        <div class="footer" id="footer">
            <div class="iframe-ubicacion">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.6243799135636!2d-58.691760185033786!3d-34.41089205482726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca176763d0d8f%3A0xf332166dc688782!2sBlackBrothers%20BarberShop!5e0!3m2!1ses!2sar!4v1651457705161!5m2!1ses!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="separador-footer">
                <div id="contacto">
                    <h2>Contactános</h2>
                    <span class="line"></span>
                    <div class="direccion">
                        <h4>Dirección:</h4>
                        <p>Jujuy 2993, Benavidez, Buenos Aires, Argentina.</p>
                    </div>
                    <div class="telefono">
                        <h4>Teléfono:</h4>
                        <p>+54 11 6435-8797</p>
                    </div>
                    <div class="redes">
                        <h4>Seguinos:</h4>
                        <i class="fa-brands fa-facebook" @click=${face}></i>
                        <i class="fa-brands fa-instagram" @click=${insta}></i>
                    </div>
                </div>
                <div class="copy-right">
                    <p>&copy; 2022 BlackBrothers BarberShop</p>
                </div>
            </div>
        </div>
    
    `;

};