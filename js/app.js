import * as UI from './interface.js';

UI.form.addEventListener('submit', (e) => {
    e.preventDefault()
    const artist = document.querySelector('#artista').value
    const song = document.querySelector('#cancion').value

    if(artist === '' || song === '') {
        UI.divMsg.innerHTML = `Error... Todos los campos son obligatorios`
        UI.divMsg.classList.add('error')
        setTimeout(() => {
            UI.divMsg.innerHTML = ''
            UI.divMsg.classList.remove('error')
        }, 3000);
    } else {
        //here is called the API
    }
})