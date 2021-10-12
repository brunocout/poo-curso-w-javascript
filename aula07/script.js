class Lutador {
    
    #nome
    #nacionalidade
    #idade
    #altura
    #peso
    #categoria
    #vitorias
    #derrotas
    #empates

    constructor(n, na, id, al, p, v, d, e) {
        this.nome = n
        this.nacio = na
        this.idade = id
        this.altura = al
        this.peso = p
        this.categoria = this.peso
        this.vitorias = v
        this.derrotas = d
        this.empates = e
    }

    set nome(n) {
        this.#nome = n
    }

    get nome() {
       return this.#nome
    }

    set nacio(na) {
        this.#nacionalidade = na
    }

    get nacio() {
       return this.#nacionalidade
    }

    set idade(i) {
        this.#idade = i
    }

    get idade() {
       return this.#idade
    }

    set altura(al) {
        this.#altura = al
    }

    get altura() {
       return this.#altura
    }

    set peso(p) {
        this.#peso = p
    }

    get peso() {
       return this.#peso
    }

    set categoria(ca) {
        if (ca < 52) {
            this.#categoria = 'inválido'
        } else if (ca <= 77) {
            this.#categoria = 'Leve'
        } else if (ca <= 92) {
            this.#categoria = 'Médio'
        } else if (ca <= 120) {
            this.#categoria = 'Pesado'
        } else {
            this.#categoria = 'inválido'
        }
    }

    get categoria() {
        return this.#categoria
    }

    set vitorias(v) {
        this.#vitorias = v
    }

    get vitorias() {
       return this.#vitorias
    }
    
    set derrotas(d) {
        this.#derrotas = d
    }

    get derrotas() {
       return this.#derrotas
    }

    set empates(e) {
        this.#empates = e
    }

    get empates() {
       return this.#empates
    }

    apresentar() {
        console.log('-------------------------------')
        console.log('Nome: ' + this.nome)
        console.log('Nacionalidade: ' + this.nacio)
        console.log('Idade: ' + this.idade)
        console.log('Altura: ' + this.altura)
        console.log('Peso: ' + this.peso)
        console.log('Categoria: ' + this.categoria)
        console.log('Vitórias: ' + this.vitorias)
        console.log('Derrotas: ' + this.derrotas)
        console.log('Empates: ' + this.empates)
    }

    status() {
        console.log('-------------------------------')
        console.log('Nome: ' + this.nome)
        console.log('Categoria: ' + this.categoria)
        console.log('Vitórias: ' + this.vitorias)
        console.log('Derrotas: ' + this.derrotas)
        console.log('Empates: ' + this.empates)
    }

    ganharLuta(g) {
        this.vitorias = this.vitorias += 1
    }

    perderLuta(p) {
        this.derrotas = this.derrotas += 1
    }

    empatarLuta(e) {
        this.empates = this.empates += 1
    }
}

class Luta {

    #desafiado
    #desafiante
    #rounds
    #aprovada

    constructor(r, a) {
        this.desafiado = new Lutador()
        this.desafiante = new Lutador()
        this.rounds = r
        this.aprovada = a
    }

    set desafiado(d) {
        this.#desafiado = d
    }

    get desafiado() {
        return this.#desafiado
    }

    set desafiante(de) {
        this.#desafiante = de
    }

    get desafiante() {
        return this.#desafiante
    }

    set rounds(r) {
        this.#rounds = r
    }

    get rounds() {
        return this.#rounds
    }

    set aprovada(a) {
        this.#aprovada = a
    }

    get aprovada() {
        return this.#aprovada
    }

    marcarLuta(l1, l2) {
        if (l1.categoria == l2.categoria && l1 != l2) {
            this.aprovada = 'Aprovada'
            this.desafiado = l1
            this.desafiante = l2
        } else {
            this.aprovada = 'Negada'
            this.desafiado = null
            this.desafiante = null
        }
    }

    lutar() {
        if (this.aprovada == 'Aprovada') {
            this.desafiado.apresentar()
            this.desafiante.apresentar()
            let vencedor =  Math.floor(Math.random() * 3)
            switch (vencedor) {
                case 0:
                    console.log('-------------------------------')
                    console.log('Empate!')
                    this.desafiado.empatarLuta()
                    this.desafiante.empatarLuta()
                    this.desafiado.status()
                    this.desafiante.status()
                    break;

                case 1:
                    console.log('-------------------------------')
                    console.log(this.desafiado.nome + ' ganhou!')
                    this.desafiado.ganharLuta()
                    this.desafiante.perderLuta()
                    this.desafiado.status()
                    break;

                case 2:
                    console.log('-------------------------------')
                    console.log(this.desafiante.nome + ' ganhou!')
                    this.desafiante.ganharLuta()                  
                    this.desafiado.perderLuta()
                    this.desafiante.status()
                    break;
                    
                default:
                    console.log('-------------------------------')
                    console.log('Luta empedida de acontecer')
                    break;
            }
        } else {
            console.log('Luta não pode acontecer')
        }
    }

}

let l = []
l[0] = new Lutador('Pretty Boy', 'França', 31, 1.75, 68.9, 11, 2, 1)
l[1] = new Lutador('Putscript', 'Brasil', 29, 1.68, 57.8, 14, 2, 3)
l[2] = new Lutador('Snapshadow', 'EUA', 35, 1.65, 80.9, 12, 2, 1)
l[3] = new Lutador('Dead Code', 'Austrália', 28, 1.93, 81.6, 13, 0, 2)
l[4] = new Lutador('Ufocobol', 'Brasil', 37, 1.70, 119.3, 5, 4, 3)
l[5] = new Lutador('Nerdaard', 'EUA', 30, 1.81, 105.7, 12, 2, 4)

let UEC01 = new Luta()
UEC01.marcarLuta(l[0], l[1])
UEC01.lutar()