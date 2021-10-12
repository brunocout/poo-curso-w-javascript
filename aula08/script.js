class Pessoa {

    #nome 
    #idade
    #sexo

    constructor(n, i, s) {
        this.nome = n
        this.idade = i
        this.sexo = s
    }

    set nome(n) {
        this.#nome = n
    }

    get nome() {
        return this.#nome
    }

    set idade(i) {
        this.#idade = i
    }

    get idade() {
        return this.#idade
    }

    set sexo(s) {
        this.#sexo = s
    }

    get sexo() {
        return this.#sexo
    }

    fazerAniver() {
        this.idade ++
    }
}

class Livro {

    #titulo
    #autor
    #totPaginas
    #pagAtual
    #aberto
    #leitor

    constructor(t, a, to, l) {
        this.titulo = t
        this.autor = a
        this.totPaginas = to
        this.aberto = 'Fechado'
        this.pagAtual = 0
        this.leitor = l
    }

    set titulo(t) {
        this.#titulo = t
    }

    get titulo() {
        return this.#titulo
    }

    set autor(a) {
        this.#autor = a
    }

    get autor() {
        return this.#autor
    }

    set totPaginas(to) {
        this.#totPaginas = to
    }

    get totPaginas() {
        return this.#totPaginas
    }

    set pagAtual(p) {
        this.#pagAtual = p
    }

    get pagAtual() {
        return this.#pagAtual
    }

    set aberto(ab) {
        this.#aberto = ab
    }

    get aberto() {
        return this.#aberto
    }

    set leitor(l) {
        this.#leitor = l
    }

    get leitor() {
        return this.#leitor
    }

    detalhes() {
        console.log('Livro { titulo=' + this.titulo + ', autor=' + this.autor +',\n totPaginas=' + this.totPaginas + ', pagAtual=' + this.pagAtual + ',\n aberto=' + this.aberto + ',\n leitor=' + this.leitor.nome + ', idade=' + this.leitor.idade + ', sexo=' + this.leitor.sexo + ' }')
    }

    abrir() {
        this.aberto = 'Aberto'
    }

    fechar() {
        this.aberto = 'Fechado'
    }

    folhear(p) {
        if (p > this.totPaginas) {
            this.pagAtual = 0
        } else {
            this.pagAtual = p
        }
        
    }

    avançarPag() {
        this.pagAtual ++
    }

    voltarPag() {
        this.pagAtual --
    }
}

let p = [2]
let l = [3]
p[0] = new Pessoa('Pedro', 22, 'M')
p[1] = new Pessoa('Maria', 25, 'F')
l[0] = new Livro('Aprendendo Java', 'José da Silva', 300, p[0])
l[1] = new Livro('POO para iniciantes', 'Pedro Paulo', 500, p[1])
l[2] = new Livro('Java Avançado', 'Maria Candido', 800, p[0])
l[0].abrir()
l[0].folhear(100)
l[0].avançarPag()
l[0].detalhes()
l[1].detalhes()