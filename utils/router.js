import { html, render } from './lit.js';


export async function router() {
    let {hash} = window.location;

    if (hash == '') {
        hash = "#/home";
    }

    let root = document.getElementById('app');
    let viewName = hash.replace('#/', '');
    try {
        const {default:view} = await import(`../views/${viewName}.js`);
        render(view(), root);
        view.init && view.init();
    }
    catch (err) {
        // const {default:view} = await import (`../views/404.js`);
        // render(view(), root);
    }
    
}