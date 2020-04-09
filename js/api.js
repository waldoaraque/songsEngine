export class API {
    constructor(artist, song) {
        this.artist = artist
        this.song = song
    }

    async getDataAPI() {
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`)

        const res = await url.json()
        return {
            res
        }
    }

}