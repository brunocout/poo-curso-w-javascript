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

    locomover() {
        
    }

    alimentar() {

    }

    emitirSom() {

    }

}

class Mamifero extends Animal {
    
    #corPelo
 
    set corPelo(cp) {
        this.#corPelo = cp
    }

    get corPelo() {
        return this.#corPelo
    }

    locomover() {
        console.log('Correndo')
    }

    alimentar() {
        console.log('Mamando')
    }

    emitirSom() {
        console.log('Som de Mamifero')
    }

}
 
class Reptil extends Animal {

    #corEscama

    set corEscama(cm) {
        this.#corEscama = cm
    }

    get corEscama() {
        return this.#corEscama
    }

    locomover() {
        console.log('Rastejando')
    }

    alimentar() {
        console.log('Come Vegetais')
    }

    emitirSom() {
        console.log('Som de Réptil')
    }

}

class Peixe extends Animal {

    #corEscam

    set corEscam(cm) {
        this.#corEscam = cm
    }

    get corEscam() {
        return this.#corEscam
    }

    soltarBolhas() {
        console.log('Soltou uma bolha')
    }
    
    locomover() {
        console.log('Nadando')
    }

    alimentar() {
        console.log('Comendo substâncias')
    }

    emitirSom() {
        console.log('Peixe não faz som')
    }
   
}

class Ave extends Animal {

    #corPenas
    
    set corPenas(cp) {
        this.#corPenas = cp
    }

    get corPenas() {
        return this.#corPenas
    }

    fazerNinho() {
        console.log('Construiu um ninho')
    }

    locomover() {
        console.log('Voando')
    }

    alimentar() {
        console.log('Comendo frutas')
    }

    emitirSom() {
        console.log('Cantando')
    }

}

class Canguru extends Mamifero {

    usarBolsa() {
        console.log('Usando bolsa')
    }

    locomover() {
        console.log('Saltando')
    }

}

class Cachorro extends Mamifero {

    emitirSom() {
        console.log('Latindo')
    }
    
    enterrarOsso() {
        console.log('Enterrando Osso')
    }

    abanarRabo() {
        console.log('Abanando o Rabo')
    }

}

class Cobra extends Reptil {


}

class Tartaruga extends Reptil {

    locomover() {
        console.log('Andando beeeeem devagar')
    }

}

class GoldFish extends Peixe {


}

class Arara extends Ave {


}

let m = new Mamifero()
let r = new Reptil()
let p = new Peixe()
let a = new Ave()
let c = new Canguru()
let k = new Cachorro()

console.log('-------------------------------')
m.peso = 5.70
m.idade = 8
m.membros = 4
m.locomover()
m.alimentar()
m.emitirSom()
console.log('-------------------------------')
c.peso = 55.30
c.idade = 3
c.membros = 4
c.locomover()
c.alimentar()
c.emitirSom()
c.usarBolsa()
console.log('-------------------------------')
k.peso = 3.94
k.idade = 5
k.membros = 4
k.locomover()
k.alimentar()
k.emitirSom()
k.abanarRabo()
console.log('-------------------------------')
p.peso = 0.35
p.idade = 1
p.membros = 0
p.locomover()
p.alimentar()
p.emitirSom()
p.soltarBolhas()
console.log('-------------------------------')
a.peso = 0.89
a.idade = 2
a.membros = 2
a.locomover()
a.alimentar()
a.emitirSom()
a.fazerNinho()
console.log('-------------------------------')