import { API } from './api.js';
import * as UI from './interface.js';

UI.form.addEventListener('submit', (e) => {
    e.preventDefault()
    const artist = document.querySelector('#artista').value
    const song = document.querySelector('#cancion').value

    if(artist === '' || song === '') {
        UI.divMsg.innerHTML = `Error... Todos los campos son obligatorios.`
        UI.divMsg.classList.add('error')
        setTimeout(() => {
            UI.divMsg.innerHTML = ''
            UI.divMsg.classList.remove('error')
        }, 3000);
    } else {
        //here is called the API
        const api = new API(artist, song)
        api.getDataAPI()
            .then( data => {
                if (data.res.lyrics) {
                    const lyrics = data.res.lyrics
                    UI.divRslt.textContent = lyrics
                } else {
                    UI.divMsg.innerHTML = `Error... La canción que busca, no existe. Pruebe con otra búsqueda.`
                    UI.divMsg.classList.add('error')
                    setTimeout(() => {
                        UI.divMsg.innerHTML = ''
                        UI.divMsg.classList.remove('error')
                        UI.form.reset()
                    }, 3000);
                }
            })  
            .catch( err => {
                console.log(`Ha ocurrido un error: ${err}`)
            })
    }
})