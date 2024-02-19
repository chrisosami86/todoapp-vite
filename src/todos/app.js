import html from './app.html?raw';

/**
 * 
 * @param {String} documenId  Identificar el elemento donde vamos a renderizar
 */
export const app = (documenId) => {
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(documenId).append(app);
    })();
};