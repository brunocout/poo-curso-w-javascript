class ControleRemoto {
    
    #volume
    #ligado
    #tocando

    constructor() {
        this.volume = 50
        this.ligado = 'Desligado'
        this.tocando = 'Pausado'
    }

    set volume(v) {
        this.#volume = v
    }

    get volume() {
        return this.#volume
    }

    set ligado(l) {
        this.#ligado = l
    }

    get ligado() {
        return this.#ligado
    }
 
    set tocando(t) {
        this.#tocando = t
    }

    get tocando() {
        return this.#tocando
    }

    ligar() {
        this.ligado = 'Ligado'
    }

    desligar() {
        this.ligado = 'Desligado'
    }

    abrirMenu() {
        if (this.ligado == 'Ligado') {
            console.log('Ligado: ' + this.ligado)
            let volume = ''
            for (let i = 0; i < this.volume; i += 10) {
                volume += '|'
            }
            console.log('Volume: ' + volume)
            console.log('Tocando: ' + this.tocando)
        }
    }

    fecharMenu() {
        this.Menu = 'Fechado'
    }

    maisVolume(v) {
        if (this.ligado == 'Ligado') {
            if (v < 0 || v >= 100 || v == null) {
                this.volume = 100
            } else {
                this.volume = v
            }
        }
    }

    menosVolume(v) {
        if (this.ligado == 'Ligado') {
            if (v > 100 || v < 0 || v == null) {
                this.mutar()
            } else {
                this.volume = this.volume - v 
            }
        }
    }

    mutar() {
        if (this.ligado == 'Ligado' && this.volume > 0) {
            this.volume = 0
        }
    }

    desmutar() {
        if (this.ligado == 'Ligado' && this.volume == 0) {
            this.volume = 50
            this.mudo = 'Desmutado'
        } 
    }
    
    play() {
        if (this.ligado == 'Ligado' && !this.tocando == 'Tocando') {
            this.tocando = 'Despausado'
        }
    }

    pause() {
        if (this.ligado == 'Ligado' && this.tocando == 'Tocando') {
            this.tocando = 'Pausado'
        }  
    }

}

let c1 = new ControleRemoto()
c1.ligar()
c1.abrirMenu()


console.log(c1)