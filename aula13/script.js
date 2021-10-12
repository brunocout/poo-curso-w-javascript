class Pessoa {

    #nome
    #idade
    #sexo
    #experiencia

    constructor(n, id, s) {
        this.nome = n
        this.idade = id
        this.sexo = s
        this.experiencia = 0
    }

    get nome() {
        return this.#nome
    }

    set nome(t) {
        this.#nome = t
    }

    get idade() {
        return this.#idade
    }

    set idade(t) {
        this.#idade = t
    }

    get sexo() {
        return this.#sexo
    }

    set sexo(t) {
        this.#sexo = t
    }

    get experiencia() {
        return this.#experiencia
    }

    set experiencia(t) {
        this.#experiencia = t
    }

    #ganharExp() {
        this.experiencia ++
    }

}

class Video {

    #titulo
    #avaliacao
    #views
    #curtidas
    #reproduzindo

    constructor(t) {
        this.titulo = t
        this.avaliacao = 1
        this.views = 0
        this.curtidas = 0
        this.reproduzindo = 'Pausado'
    }

    get titulo() {
        return this.#titulo
    }

    set titulo(t) {
        this.#titulo = t
    }

    get avaliacao() {
        return this.#avaliacao
    }

    set avaliacao(a) {
        this.#avaliacao = a
    }

    get views() {
        return this.#views
    }

    set views(v) {
        this.#views = v
    }

    get curtidas() {
        return this.#curtidas
    }

    set curtidas(c) {
        this.#curtidas = c
    }

    get reproduzindo() {
        return this.#reproduzindo
    }

    set reproduzindo(r) {
        this.#reproduzindo = r
    }

    play() {
        this.reproduzindo = 'Despausado'
    }

    pause() {
        this.reproduzindo = 'Pausado'
    }

    like() {
        this.curtidas ++
    }
    view() {
        this.views ++
    }

    ava(a) {
        this.avaliacao = a
    }

}

class Gafanhoto extends Pessoa {

    #login
    #totAssistido

    constructor(n, id, s, l) {
        super(n, id, s)
        this.login = l
        this.totAssistido = 0
    }

    set login(l) {
        this.#login = l
    }

    get login() {
        return this.#login
    }

    set totAssistido(t) {
        this.#totAssistido = t
    }

    get totAssistido() {
        return this.#totAssistido
    }

    viuMaisUm() {
        this.totAssistido ++
    }
}

class Visualizacao {

    #espectador
    #filme

    constructor(g, f) {
        this.espectador = g
        this.filme = f
        this.espectador.viuMaisUm()
        this.filme.view()
    }

    get espectador() {
        return this.#espectador
    }

    set espectador(e) {
        this.#espectador = e
    }

    get filme() {
        return this.#filme
    }

    set filme(f) {
        this.#filme = f
    }

    avaliar() {
        this.filme.ava(5)
    }

    avaliar(n) {
        this.filme.ava(n)
    }

    avaliar(p) {
        let tot = 0
        if (p <= 20) {
            tot = 3
        } else if (p <= 50) {
            tot = 5
        } else if (p <= 90) {
            tot = 8
        } else {
            tot = 10
        }
        this.filme.ava(tot)
    }

}

let v = [3]
v[0] = new Video('Aula 1 de POO')
v[1] = new Video('Aula 12 de PHP')
v[2] = new Video('Aula 10 de HTML5')

let g = [2]
g[0] = new Gafanhoto('Jubileu', 22, 'M', 'juba')
g[1] = new Gafanhoto('Creuza', 12, 'F', 'creuzita')

let vis = [5]
vis[0] = new Visualizacao(g[0], v[2])
vis[1] = new Visualizacao(g[0], v[1])
console.log(vis[0], vis[1])
