let day = new Date()
let hora = day.getHours()
let min = day.getMinutes()

class Animal {

    #peso 
    #idade
    #membros

    set peso(p) {
        this.#peso = p
    }

    get peso() {
        return this.#peso
    }

    set idade(i) {
        this.#idade = i
    }

    get idade() {
        return this.#idade
    }

    set membros(m) {
        this.#membros = m
    }

    get membros() {
        return this.#membros
    }

    emitirSom() {

    }

}

class Mamifero extends Animal {

    emitirSom() {
        console.log('Som de Mamifero')
    }

}

class Lobo extends Mamifero {

    emitirSom() {
        console.log('Uivando')
    }

}

class Cachorro extends Lobo {

    reagir(f) {
        if (f == 'toma comida' || f == 'Olá') {
            console.log('Abanar e latir')
        } else {
            console.log('Rosnar')
        }
    }

    reagir(h) {
        if (h < 12) {
            console.log('Abanar')
        } else if (h >= 18){
            console.log('Ignorar')
        } else {
            console.log('Abanar e Latir')
        }
    }

    reagir(d) {
        if (d == 'Sim') {
            console.log('Abanar')
        } else {
            console.log('Rosnar e Latir')
        }
    }

    reagir(id, p) {
        if (id < 5) {
            if (p < 10) {
                console.log('Abanar')
            } else {
                console.log('Latir')
            }
        } else {
            if (p < 10) {
                console.log('Rosnar')
            } else {
                console.log('Ignorar')
            }
        }
    }

    emitirSom() {
        console.log('Latindo')
    }

}

let c = new Cachorro()
c.reagir()