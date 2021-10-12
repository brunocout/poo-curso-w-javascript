class Caneta {

    constructor () {
        this.modelo = 'bic01' //publico
        this.cor = 'azul' // publico
        this.ponta = 'esferica' // privado
        this.carga = 100 // protegido
        this.tampada = false // protegido
    }

    rabiscar() { // publico
        if (this.tampada == true) {
            console.log('Erro, a caneta está tampada')
        } else {
            console.log('Rabisco')
        }
    }

    tampar() { // privado
        this.tampada = true
    }

    destampar() { // privado
        this.tampada = false
    }
}

let c1 = new Caneta()
c1.cor = 'azul'
c1.destampar()
c1.rabiscar()
console.log(c1)